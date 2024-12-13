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

        // Reorder categories with "Others" at the end
        const orderedCategories = [
          { id: null, name: 'All Products' },
          ...categoryData.filter((c) => c.name !== 'Others'),
          ...categoryData.filter((c) => c.name === 'Others'),
        ];

        setCategories(orderedCategories);
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
      {/* Navbar */}
      <div className='h-24 w-full bg-primary my-12'>
        <div className='flex flex-wrap justify-start items-center h-full max-w-7xl mx-auto text-white text-base sm:text-lg md:text-xl font-semibold gap-4 sm:gap-6 lg:gap-8'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className={`h-full flex items-center py-2 px-4 sm:px-6 lg:px-8 ${
                selectedCategory === category.id
                  ? 'border-t-4 border-white'
                  : ''
              } hover:border-t-4 hover:border-white transition-all duration-300 ease-in-out`}>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
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
          {/* Product Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 sm:p-12 max-w-7xl mx-auto'>
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
