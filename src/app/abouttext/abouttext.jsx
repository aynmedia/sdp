/** @format */
'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutText = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-primary my-12 md:my-24 px-4 lg:px-8'
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}>
      <motion.h1
        className='text-xl md:text-2xl font-semibold leading-tight'
        variants={itemVariants}>
        Discover the Power of Air Compressors with SD Pneumatics! Exceptional
        air compressors from Anest Iwata and Kobelco, available through SD
        Pneumatics.
      </motion.h1>

      <motion.div
        className='flex flex-col justify-center'
        variants={itemVariants}>
        <motion.p
          className='text-base md:text-lg leading-relaxed'
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}>
          These compressors are engineered for efficiency and reliability,
          utilizing advanced technology to deliver high-pressure air for diverse
          industrial applications.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default AboutText;
