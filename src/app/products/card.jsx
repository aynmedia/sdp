/** @format */

'use client';

import { Download } from 'lucide-react';
import Image from 'next/image';

export default function ProductCard({ products }) {
  // File download handler
  const handleDownload = async (catalogueId) => {
    try {
      // Fetch the file URL from WordPress media endpoint
      const response = await fetch(
        `https://sdpneumatics.in/backend/wp-json/wp/v2/media/${catalogueId}`
      );
      const mediaData = await response.json();

      // If file URL exists, trigger download
      if (mediaData.source_url) {
        const link = document.createElement('a');
        link.href = mediaData.source_url;
        link.download = mediaData.title.rendered || 'catalogue';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Download error:', error);
      alert('Unable to download file. Please try again.');
    }
  };

  return (
    <div className='bg-white shadow-sm rounded-lg overflow-hidden'>
      {/* Product Image */}
      {products.featured_media && (
        <Image
          src={products.featured_media}
          alt={products.title.rendered || 'Product Image'}
          className='w-full
           object-cover'
          width={400}
          height={400}
        />
      )}

      {/* Product Details */}
      <div className='p-4'>
        <h3 className='text-lg font-bold mb-2'>{products.title.rendered}</h3>

        {/* Optional Product Type */}
        {products.acf?.type && (
          <p className='text-sm font-thin text-gray-600 mb-1'>
            Type: {products.acf.type.split(':')[1]}
          </p>
        )}
        {products.acf?.type && (
          <p className='text-sm font-thin text-gray-600 mb-1'>
            Solutions: {products.acf.solutions.split(':')[1]}
          </p>
        )}

        {/* Catalogue Download Button */}
        {products.acf?.catalogue && (
          <button
            onClick={() => handleDownload(products.acf.catalogue)}
            className='
              
               flex items-center
              text-primary 
              py-1 
              mt-1 
              text-gray-500 font-thin
              text-sm
            '>
            <Download size={22} className='mr-2' />
            Download Catalogue
          </button>
        )}
        <button
          onClick={() => handleDownload(products.acf.catalogue)}
          className='
              
               flex items-center
              text-primary 
              py-1 
              mt-1 
              text-gray-500 hover:text-gray-800 font-thin
              text-sm
            '>
          <Download size={22} className='mr-2' />
          Get a Quote
        </button>
      </div>
    </div>
  );
}
