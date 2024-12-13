/** @format */

'use client';
import { useEffect, useState } from 'react';
import ProductCard from './card';

export default function Products() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination and Filtering State
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const productsPerPage = 9;

  // Fetch Categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const categoryRes = await fetch(
          'https://sdpneumatics.in/backend/wp-json/wp/v2/categories'
        );
        const categoryData = await categoryRes.json();
        setCategories([{ id: null, name: 'All Products' }, ...categoryData]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, []);

  // Fetch Products
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);

        // Build query parameters
        const params = new URLSearchParams({
          page: currentPage.toString(),
          per_page: productsPerPage.toString(),
        });

        // Add category filter if a category is selected
        if (selectedCategory) {
          // Append the category parameter for actual filtering
          params.append('categories', selectedCategory);
        }

        const res = await fetch(
          `https://sdpneumatics.in/backend/wp-json/wp/v2/products?${params.toString()}`
        );

        // Get total pages from response headers
        const totalPagesHeader = res.headers.get('X-WP-TotalPages');
        setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader) : 0);

        const data = await res.json();

        const productWithImages = await Promise.all(
          data.map(async (product) => {
            try {
              const mediaRes = await fetch(
                `https://sdpneumatics.in/backend/wp-json/wp/v2/media/${product.featured_media}`
              );
              const mediaData = await mediaRes.json();

              return {
                ...product,
                featured_media: mediaData.source_url || '',
              };
            } catch {
              return product;
            }
          })
        );

        setPosts(productWithImages);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage, selectedCategory]);

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Category selection handler
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <>
      {/* Category Filters */}
      <div className='flex flex-wrap justify-center gap-4 p-6 bg-gray-100'>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategorySelect(category.id)}
            className={`
              px-3 py-2 rounded-full 
              ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border border-gray-300'
              }
              hover:bg-primary hover:text-white
              transition duration-300 ease-in-out
            `}>
            {category.name}
          </button>
        ))}
      </div>

      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-700'></div>
        </div>
      ) : error ? (
        <div className='flex justify-center items-center h-screen'>
          <p>Error fetching posts</p>
        </div>
      ) : (
        <>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-12'>
            {posts.map((post, index) => (
              <ProductCard key={index} products={post} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className='flex justify-center items-center space-x-4 mt-8 mb-8'>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'>
              Previous
            </button>

            <span className='text-gray-700'>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'>
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
