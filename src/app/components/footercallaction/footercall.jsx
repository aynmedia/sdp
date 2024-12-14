/** @format */

import Image from 'next/image';
import React from 'react';
import call from '@/../public/images/call.jpg';
import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';
import air from '@/../public/images/air.webp';

const FooterCall = () => {
  return (
    <div className='relative h-[700px] w-full flex items-center justify-center overflow-hidden'>
      {/* Background Image */}
      <Image
        src={call}
        alt='Call background'
        fill
        className='absolute top-0 left-0 object-cover'
      />

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-gray-100/80 to-gray-100/80'></div>

      {/* Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 py-16 w-full'>
        <Image
          src={air}
          alt='Air trust illustration'
          width={400}
          height={400}
          className='w-full max-w-md object-contain mb-6 flex items-center'
        />
        <div className='grid md:grid-cols-2 gap-8'>
          {/* First Column */}
          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-bold text-primary mb-4'>
                How Can We Assist You?
              </h1>
              <p className='text-primary mb-6 max-w-md'>
                We provide expert advice, reliable products, and custom
                pneumatic solutions to meet your needs efficiently.
              </p>
              <Link
                href='/products'
                className='inline-flex items-center text-lg font-semibold 
                text-primary 
                px-6 py-3 rounded-full transition-colors duration-300'>
                Explore our products
                <CircleArrowRight size={24} className='ml-2' />
              </Link>
            </div>
          </div>

          {/* Second Column */}
          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-bold text-primary mb-4'>
                24/7 Service by Specialist
              </h1>
              <p className='text-primary mb-6 max-w-md'>
                Our experts are available around the clock to provide
                professional support and ensure uninterrupted operations.
              </p>
              <Link
                href='/products'
                className='inline-flex items-center text-lg font-semibold 
                text-primary 
                px-6 py-3 rounded-full transition-colors duration-300'>
                Email Us
                <CircleArrowRight size={24} className='ml-2' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCall;
