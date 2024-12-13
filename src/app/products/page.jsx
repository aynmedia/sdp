/** @format */

import React from 'react';
import Products from './products';
import icon1 from '@/../public/images/icon1.svg';
import icon2 from '@/../public/images/icon2.svg';
import icon3 from '@/../public/images/icon3.svg';
import Image from 'next/image';
const page = () => {
  return (
    <div>
      <div className='min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center flex-col'>
        <div className='flex flex-col gap-5 w-1/2'>
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
