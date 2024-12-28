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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const productsPerPage = 1;

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
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <div className='relative'>
      {/* Mobile Category Toggle (Moved down) */}
      <div className='container mx-auto  pt-4 md:pt-0'>
        <div className='md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='w-full p-4 text-center bg-primary text-white font-semibold'>
            {isMobileMenuOpen ? 'Close Categories' : 'Select Categories'}
          </button>
        </div>

        {/* Navbar with Categories */}
        <div
          className={`
          md:static 
          w-full bg-primary h-20
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          md:translate-y-0 z-40
        `}>
          <div
            className='
            flex flex-col md:flex-row 
            overflow-y-auto max-h-[calc(100vh-4rem)] 
            md:max-h-none
            justify-start items-stretch md:items-center 
            h-full max-w-7xl mx-auto 
            text-white text-base sm:text-lg md:text-lg 
            font-regular gap-0 md:gap-4
          '>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`
                  w-full md:w-auto
                  flex items-center justify-center 
                  py-6  px-4 sm:px-6 lg:px-8 
                  ${
                    selectedCategory === category.id
                      ? 'bg-primary md:border-t-4 border-white'
                      : 'hover:bg-white/10'
                  }
                  transition-all duration-300 ease-in-out
                `}>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className='pt-4'>
          {loading ? (
            <div className='flex justify-center items-center h-screen'>
              <div className='animate-spin rounded-full h-16 sm:h-24 md:h-32 w-16 sm:w-24 md:w-32 border-t-2 border-b-2 border-gray-700'></div>
            </div>
          ) : error ? (
            <div className='flex justify-center items-center h-screen'>
              <p className='text-center text-red-500'>Error fetching posts</p>
            </div>
          ) : (
            <>
              {/* Product Grid */}
              <div
                className='
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                lg:grid-cols-3 gap-4 sm:gap-6 
                px-0 sm:p-0 
                max-w-7xl mx-auto my-12
              '>
                {posts.map((post, index) => (
                  <ProductCard key={index} products={post} />
                ))}
              </div>

              {/* Pagination Controls */}
              <div
                className='
                flex flex-col sm:flex-row 
                justify-center items-center 
                space-y-4 sm:space-y-0 sm:space-x-4 
                mt-8 mb-8 px-4
              '>
                {currentPage !== 1 && (
                  <button
                    onClick={handlePrevPage}
                    className='
                      w-full sm:w-auto 
                      px-4 py-2 
                      bg-gray-200 rounded 
                      transition-colors
                    '>
                    Previous
                  </button>
                )}

                {currentPage !== 0 && (
                  <span className='text-gray-700 my-2 sm:my-0'>
                    Page {currentPage} of {totalPages}
                  </span>
                )}

                {currentPage !== totalPages && (
                  <button
                    onClick={handleNextPage}
                    className='
                      w-full sm:w-auto 
                      px-4 py-2 
                      bg-gray-200 rounded 
                      transition-colors
                    '>
                    Next
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
