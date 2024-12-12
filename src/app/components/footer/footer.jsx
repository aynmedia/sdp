/** @format */

import Image from 'next/image';
import React from 'react';
import map from '@/../public/images/map.png';
import logo from '@/../public/images/logo.png';
import Link from 'next/link';

const info = [
  { name: 'Blogs', href: '/' },
  {
    name: 'Products',
    href: '/',
  },
  { name: 'Services', href: '/' },
];
const Footer = () => {
  return (
    <div className='bg-primary min-h-screen'>
      <div className='flex flex-col items-center justify-center py-16 px-4 md:px-12 lg:px-24 text-white'>
        <Image src={map} alt='Map' width={1000} height={500} className='' />
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center py-16 px-4 md:px-12 lg:px-24 bg-[#17181C] text-white col-span-1'></div>
        <div className='grid grid-cols-1 col-span-2 md:grid-cols-3 py-16 px-4 md:px-12 lg:px-24 text-white'>
          <div>
            <h1 className='text-md font-medium text-[#FFD400] uppercase'>
              Info
            </h1>{' '}
            <div className='my-4'>
              {info.map((item, index) => (
                <Link key={index} href={item.href}>
                  <h1 className='text-base font-medium text-white/80 hover:text-white'>
                    {item.name}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h1 className='text-md font-medium text-[#FFD400] uppercase'>
              About Us
            </h1>
          </div>
          <div className='flex justify-end'>
            <Image src={logo} alt='Map' width={100} height={50} className='' />
          </div>
          <div>
            <h1 className='text-md font-medium text-[#FFD400] uppercase'>
              Contact Us
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
