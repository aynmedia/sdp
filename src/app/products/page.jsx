/** @format */

import React from 'react';
import Products from './products';
import productbg from '@/../public/images/productbg.jpg';
import Image from 'next/image';
const page = () => {
  return (
    <div className='relative'>
      {' '}
      <div className='absolute w-full h-screen'>
        <Image src={productbg} alt='product bg' fill objectFit='cover' />
        <div className='absolute inset-0 bg-gradient-to-b from-gray-100/80 to-gray-100/80'></div>
      </div>
      <div className=' min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col'>
        <div className='absolute flex flex-col gap-5 md:w-1/2'>
          <span className='text-xl font-black text-green-600'>Products</span>
          <h1 className='text-4xl font-bold'>All Products</h1>
          <p className='text-black/60'>
            Discover durable and efficient pneumatic products, including air
            compressors, valves, actuators, and fittings. Designed with advanced
            technology, our solutions ensure optimal performance and meet
            diverse industrial needs. Experience innovation with SDP Pneumatics.
          </p>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default page;
