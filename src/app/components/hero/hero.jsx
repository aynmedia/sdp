/** @format */
'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import anestlogo from '@/../public/images/anestlogo.svg';
import kobelco from '@/../public/images/kobelco.svg';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
const ScrollDownIndicator = () => {
  return (
    <motion.div
      className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center '
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 0],
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}>
      <span className='text-[#FFD400] text-sm mb-2 tracking-wider'>
        SCROLL DOWN
      </span>
      <motion.div
        className='w-12 h-12 border-2 border-[#FFD400] rounded-full flex items-center justify-center'
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#FFD400'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path d='M12 5v14' />
          <path d='m19 12-7 7-7-7' />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className='bg-primary relative overflow-hidden  pt-16'>
      <motion.div
        className='flex md:flex-row flex-col items-center justify-center min-h-screen gap-8 md:gap-24 max-w-7xl mx-auto px-4 py-16 relative'
        initial='hidden'
        animate='visible'
        variants={containerVariants}>
        <motion.div
          className='text-white text-center w-full md:w-1/2 flex flex-col gap-8'
          variants={itemVariants}>
          <motion.h1
            className='capitalize text-3xl md:text-5xl font-bold md:text-left'
            variants={itemVariants}>
            Discover the Power of Air Compressors with SD Pneumatics
          </motion.h1>

          <motion.div variants={itemVariants} className='flex md:text-left'>
            <button className='py-2 px-6 font-bold rounded-full bg-[#FFD400] text-primary hover:bg-black hover:text-[#FFD400] transition-colors duration-300'>
              Get Started
            </button>
          </motion.div>

          <motion.div className='w-full flex justify-center md:justify-start relative'>
            <HeroVideoDialog
              className='dark:hidden block'
              animationStyle='from-center'
              videoSrc='https://www.youtube.com/embed/zODMDux4Loc'
              thumbnailSrc='https://sdp-pink.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.f4f5eb7b.png&w=640&q=75'
              thumbnailAlt='Hero Video'
            />
            <HeroVideoDialog
              className='hidden dark:block'
              animationStyle='from-center'
              videoSrc='https://www.youtube.com/embed/zODMDux4Loc'
              thumbnailSrc='https://sdp-pink.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.f4f5eb7b.png&w=640&q=75'
              thumbnailAlt='Hero Video'
            />
            {/* <Image
              src={hero}
              alt='Air Compressor'
              width={400}
              height={400}
              className='max-w-full h-auto'
            /> */}
          </motion.div>
        </motion.div>

        <motion.div
          className='text-white/50 text-center w-full md:w-1/2 space-y-8'
          variants={itemVariants}>
          <motion.p
            className='text-left text-base md:text-md'
            variants={itemVariants}>
            The new line of Anest Iwata oil lubricated rotary vane vacuum pumps,
            designed and manufactured in Germany, offers the best in Class
            performance to the demanding needs of various industries and
            applications
          </motion.p>

          <motion.div
            className='grid grid-cols-3 gap-4'
            variants={itemVariants}>
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '10+', label: 'Years of Experience' },
              { number: '95%', label: 'Customer Satisfaction Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className='text-left'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}>
                <span className='text-3xl md:text-4xl font-bold block'>
                  {stat.number}
                </span>
                <p className='text-sm md:text-base'>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          <h1 className='text-white text-2xl font-bold'>
            Authorized dealer of
          </h1>
          <motion.div
            className='w-full flex md:flex-row flex-col items-center  gap-6 justify-center mt-8 bg-white p-4 rounded-lg'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Image
              src={anestlogo}
              alt='SD Pneumatics'
              width={300}
              height={300}
              className='max-w-full h-auto'
            />
            <Image
              src={kobelco}
              alt='SD Pneumatics'
              width={300}
              height={300}
              className='max-w-full h-auto'
            />
          </motion.div>
        </motion.div>

        <ScrollDownIndicator />
      </motion.div>
    </div>
  );
};

export default Hero;
