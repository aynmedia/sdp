/** @format */

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import OrbitingCircles from '@/components/ui/orbiting-circles';
import Image from 'next/image';
import { CircleArrowRight, CircleCheckBig } from 'lucide-react';
import Link from 'next/link';
import homemachine from '@/../public/images/homemachine.png';
import slide1 from '@/../public/images/slide1.svg';
import slide2 from '@/../public/images/slide2.svg';
import slide3 from '@/../public/images/slide3.svg';
import slide4 from '@/../public/images/slide4.svg';

const products = [
  'Air Compressors',
  'Air Cooled Chiller',
  'Panel Air Conditioner',
  'Dry Scroll Vacuum Pumps',
  'Air Blast Cooling System',
  'Air Blast Oil Cooler',
  'Oxygen Generators',
  'Nitrogen Generators',
];

const Icons = {
  gitHub: () => (
    <Image
      src={slide1}
      alt='GitHub'
      width={1000}
      height={1000}
      className='rounded-full'
    />
  ),
  notion: () => (
    <Image
      src={slide2}
      alt='Notion'
      width={1000}
      height={1000}
      className='rounded-full'
    />
  ),
  openai: () => (
    <Image
      src={slide3}
      alt='OpenAI'
      width={1000}
      height={1000}
      className='rounded-full'
    />
  ),
  googleDrive: () => (
    <Image
      src={slide4}
      alt='Google Drive'
      width={1000}
      height={1000}
      className='rounded-full'
    />
  ),
};

export function OrbitingCirclesDemo() {
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
    hidden: { y: 50, opacity: 0 },
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
    <motion.div
      className='bg-[#F4F4F4]'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}>
      <div className='max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-2 my-12 mx-6 py-4'>
        <motion.div
          className='md:mt-12 flex flex-1 flex-col justify-center gap-6'
          variants={itemVariants}>
          <motion.h1 className='text-4xl font-bold' variants={itemVariants}>
            Leading the Way in Pneumatic Solutions
          </motion.h1>
          <motion.p variants={itemVariants} className='text-black/60'>
            SD Pneumatics stands out for its commitment to Quality, Innovation,
            and Customer satisfaction. Our tailored solutions are designed to
            improve Performance, Reduce downtime, and increase Operational
            longevity. Here&apos;s why industries trust us.
          </motion.p>
          <motion.p
            className='text-xl font-bold text-primary/80'
            variants={itemVariants}>
            Some of our wide range of products
          </motion.p>
          <motion.div
            className='grid grid-cols-2 gap-4'
            variants={itemVariants}>
            {products.map((product, index) => (
              <motion.div
                key={index}
                className='text-md flex gap-2 items-center'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}>
                <CircleCheckBig size={20} /> {product}
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href='/products'
              className='mt-2 cursor-pointer text-lg font-semibold items-center text-center flex text-black/60 hover:text-black transition-colors duration-300'>
              Explore our products{' '}
              <CircleArrowRight size={24} className='ml-2' />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className='relative flex  h-[630px] w-full flex-col items-center justify-center overflow-hidden'>
          <motion.span
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}>
            <Image src={homemachine} alt='logo' width={240} height={240} />
          </motion.span>

          {/* Inner Circles */}
          <OrbitingCircles
            className='size-[100px] border-none bg-transparent'
            duration={20}
            delay={20}
            radius={150}>
            <Icons.openai />
          </OrbitingCircles>
          <OrbitingCircles
            className='size-[100px] border-none bg-transparent'
            duration={20}
            delay={10}
            radius={150}>
            <Icons.notion />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className='size-[130px] border-none bg-transparent'
            radius={250}
            duration={20}
            reverse>
            <Icons.googleDrive />
          </OrbitingCircles>
          <OrbitingCircles
            className='size-[130px] border-none bg-transparent'
            radius={250}
            duration={20}
            delay={20}
            reverse>
            <Icons.gitHub />
          </OrbitingCircles>
        </motion.div>
      </div>
    </motion.div>
  );
}
