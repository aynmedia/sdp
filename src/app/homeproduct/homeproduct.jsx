/** @format */

'use client';
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import hero from '@/../public/images/hero.png';
import homemachine from '@/../public/images/homemachine.png';
import { useRef } from 'react';

const HomeProduct = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const products = [
    {
      title: 'Anest Iwata',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      image: hero,
    },
    {
      title: 'Kabelco ',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      image: homemachine,
    },
    {
      title: 'Others',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      image: hero,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div
      ref={ref}
      className='bg-[#FFD400] py-2 px-4 md:px-12 text-white relative overflow-hidden'>
      {/* Animated Hover Image */}
      <AnimatePresence>
        {hoveredProduct && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            exit={{ opacity: 0, scale: 0.7, rotate: -20 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                       pointer-events-none max-w-md max-h-96'>
            <Image
              src={hoveredProduct.image}
              alt={hoveredProduct.title}
              width={400}
              height={300}
              className='w-full h-full object-cover -rotate-12'
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className='max-w-7xl mx-auto gap-6 text-primary my-12 md:my-24 px-4 lg:px-8'>
        <Accordion type='single' collapsible className='w-full'>
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants} className='mb-4'>
              <AccordionItem
                value={`item-${index}`}
                className='border-b border-black'>
                <AccordionTrigger
                  className='hover:no-underline flex justify-between items-center py-4 px-0 group'
                  onMouseEnter={() => setHoveredProduct(product)}
                  onMouseLeave={() => setHoveredProduct(null)}>
                  <div className='flex items-center justify-between w-full'>
                    <motion.h2
                      whileHover={{ scale: 1.05 }}
                      className='text-2xl md:text-4xl font-bold transition-all duration-300 ease-in-out'>
                      {product.title}
                    </motion.h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className='pb-4'>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='text-base md:text-lg text-black'>
                    {product.description}
                  </motion.p>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default HomeProduct;
