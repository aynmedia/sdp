/** @format */

'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import support from '@/../public/images/support.jpg';
import ShimmerButton from '@/components/ui/shimmer-button';
import contact from '@/../public/images/contact.jpg';
import quote from '@/../public/images/quote.jpg';
import spare from '@/../public/images/spare.jpg';

const ButtonGroup = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const buttonItems = [
    { button: 'Request Quote', image: quote, imageFirst: false },
    { button: 'Contact Us', image: contact, imageFirst: true },
    { button: 'Request Spare Parts', image: spare, imageFirst: false },
    { button: 'Service & Support', image: support, imageFirst: true },
  ];

  // Ref for triggering animations when in view
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

  return (
    <motion.div
      ref={ref}
      className='grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto gap-6 text-primary my-12 md:my-24 px-4 lg:px-8'
      variants={containerVariants}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}>
      {buttonItems.map((item, index) => (
        <motion.div
          key={index}
          className='flex flex-col items-center gap-6 p-4 rounded-lg bg-white dark:bg-gray-800'
          variants={itemVariants}
          whileHover='hover'>
          {item.imageFirst ? (
            <>
              <Image
                src={item.image}
                alt={item.button}
                width={300}
                height={300}
                className='rounded-lg'
              />
              <ShimmerButton
                borderRadius='5px'
                background='linear-gradient(90deg, #FFD400, #FFA500)'
                className='w-full'>
                <span className='text-center text-md font-medium text-black dark:text-white'>
                  {item.button}
                </span>
              </ShimmerButton>
            </>
          ) : (
            <>
              <ShimmerButton
                borderRadius='5px'
                background='linear-gradient(90deg, #FFD400, #FFA500)'
                className='w-full'>
                <span className='text-center text-md font-medium text-black dark:text-white'>
                  {item.button}
                </span>
              </ShimmerButton>
              <Image
                src={item.image}
                alt={item.button}
                width={300}
                height={300}
                className='rounded-lg'
              />
            </>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ButtonGroup;
