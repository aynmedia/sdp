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
import abouthome from '@/../public/images/abouthome.jpg';
import kobe from '@/../public/images/kobe.png';
const HomeProduct = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [openAccordion, setOpenAccordion] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const products = [
    {
      title: 'Anest Iwata',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      image: abouthome,
    },
    {
      title: 'Kabelco ',
      description:
        'KOBELCO COMPRESSORS is a global compressed air solution provider from Japan, having over 100 years history. Introducing corporate philosophy, history, locations and other corporate information.',
      image: kobe,
    },
    {
      title: 'Oxygen Generator',
      description:
        'Anest Iwata offers an extensive range of products covering the entire spectrum of paint coating equipment to meet varied requirements of its customers across different industries.',
      image: hero,
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
        staggerChildren: 0.3,
        delayChildren: 0.7,
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

  const handleMouseEnter = (index) => {
    setHoveredProduct(products[index]);
    setOpenAccordion(`item-${index}`);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
    setOpenAccordion(null);
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
              width={300}
              height={400}
              className='w-full h-full object-cover'
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
        <Accordion
          type='single'
          collapsible
          value={openAccordion}
          onValueChange={setOpenAccordion}
          className='w-full'>
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants} className='mb-4'>
              <AccordionItem
                value={`item-${index}`}
                className='border-b border-black'>
                <AccordionTrigger
                  className='hover:no-underline flex justify-between items-center py-4 px-0 group'
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}>
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
                    className='md:w-1/2 w-full text-base md:text-lg text-black'>
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
