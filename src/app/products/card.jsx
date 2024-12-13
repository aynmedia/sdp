/** @format */

import Image from 'next/image';
import React from 'react';

const Card = ({ products }) => {
  return (
    <div className='mx-auto '>
      <Image
        src={products.featured_media}
        alt='Card Image'
        width={300}
        height={300}
        className='card-image'
      />
      <div className='flex flex-col gap-2 py-2'>
        <h2 className='text-lg font-bold'>{products.title.rendered}</h2>
        <p className='card-description'>Card Description</p>
        <span className='text-sm text-gray-700'></span>
      </div>
    </div>
  );
};

export default Card;
