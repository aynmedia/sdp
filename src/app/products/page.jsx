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
      <div className='h-[500px] bg-['></div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900 mt-4 mb-4'>
          The distinction that sets us Apart in the industry
        </h1>
        <p className='mt-4 text-gray-700 w-full md:w-1/2'>
          In a highly competitive industry, what distinguishes a company is not
          just its offerings but its unwavering commitment to excellence and
          innovation. At Oakland C.E., we understand that to rise above the
          competition, we must constantly strive for distinction in every aspect
          of our business. Our journey in the energy sector has been defined by
          innovation and expertise.
        </p>
        <div className='flex flex-wrap justify-left gap-12 mt-8 mb-8 text-xl font-semibold'>
          <span className='flex gap-4 items-center'>
            <Image src={icon2} alt='icon' width={30} height={30} />
            <h1>Inovation</h1>
          </span>
          <span className='flex gap-4 items-center'>
            <Image src={icon2} alt='icon' width={30} height={30} />
            <h1>Expertise</h1>
          </span>
          <span className='flex gap-4 items-center'>
            <Image src={icon3} alt='icon' width={30} height={30} />
            <h1>Commitment</h1>
          </span>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#f4f4f4] my-8'>
        <Products />
      </div>
    </div>
  );
};

export default page;
