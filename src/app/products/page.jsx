/** @format */

import React from 'react';
import Products from './products';

const page = () => {
  return (
    <div>
      <div className='h-[500px]'></div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1>The distinction that sets us Apart in the industry</h1>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f4f4f4] my-8'>
        <Products />
      </div>
    </div>
  );
};

export default page;
