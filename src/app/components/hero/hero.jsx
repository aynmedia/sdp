/** @format */

'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Send,
  ChevronRight,
  ReceiptIndianRupee,
  Headset,
  Cog,
  WrenchIcon,
} from 'lucide-react';

import anestlogo from '@/../public/images/anestlogo.svg';
import kobelco from '@/../public/images/kobelco.svg';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';

const ContactBanner = () => {
  const contactOptions = [
    {
      icon: ReceiptIndianRupee,
      title: 'Request Quote',
      description: 'Free Quote',
      link: 'tel:+1234567890',
      color: 'bg-green-700',
      hoverColor: 'hover:bg-green-800',
    },
    {
      icon: Headset,
      title: 'Support Request',
      description: 'Get Help',
      link: '/quote',
      color: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800',
    },
    {
      icon: Cog,
      title: 'Request Spare Parts',
      description: 'Order Spares',
      link: '/services',
      color: 'bg-yellow-700',
      hoverColor: 'hover:bg-yellow-800',
    },
    {
      icon: WrenchIcon,
      title: 'Service Request',
      description: 'Get Support',
      link: '/spare-parts',
      color: 'bg-purple-700',
      hoverColor: 'hover:bg-purple-800',
    },
  ];

  return (
    <div className='w-full bg-gray-800/10 backdrop-blur-sm py-4 px-4'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {contactOptions.map((option, index) => (
          <motion.a
            key={index}
            href={option.link}
            className={`
              group flex items-center justify-between p-4 rounded-lg 
              ${option.color} ${option.hoverColor} 
              text-white transition-all duration-300 transform
              w-full
            `}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
            }}
            whileTap={{ scale: 0.95 }}>
            <div className='flex items-center space-x-4'>
              <option.icon
                size={28}
                className='group-hover:rotate-12 transition-transform'
              />
              <div>
                <h3 className='text-lg font-bold'>{option.title}</h3>
                <p className='text-sm opacity-75'>{option.description}</p>
              </div>
            </div>
            <ChevronRight
              size={24}
              className='group-hover:translate-x-1 transition-transform'
            />
          </motion.a>
        ))}
      </div>
    </div>
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

  const heroStats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '10+', label: 'Years of Experience' },
    { number: '95%', label: 'Customer Satisfaction Rate' },
  ];

  return (
    <div className='bg-primary relative overflow-hidden'>
      <ContactBanner />

      <motion.div
        className='flex md:flex-row flex-col items-center justify-center min-h-screen gap-8 md:gap-24 max-w-7xl mx-auto px-4 py-16 relative'
        initial='hidden'
        animate='visible'
        variants={containerVariants}>
        <motion.div
          className='text-white text-center w-full md:w-1/2 flex flex-col gap-8 z-10'
          variants={itemVariants}>
          <motion.h1
            className='capitalize text-3xl md:text-4xl font-bold md:text-left'
            variants={itemVariants}>
            Discover the Power of Air Compressors with SD Pneumatics
          </motion.h1>

          <motion.div variants={itemVariants} className='flex md:text-left'>
            <motion.a
              href='/quote'
              className='py-2 px-6 font-bold rounded-full bg-[#FFD400] text-primary hover:bg-black hover:text-[#FFD400] transition-colors duration-300 flex items-center gap-2'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <Send size={20} />
              Get Started
            </motion.a>
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
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                className='text-left'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}>
                <span className='text-3xl md:text-4xl font-bold block text-white'>
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
            className='w-full flex md:flex-row flex-col items-center gap-6 justify-center mt-8 bg-white p-4 rounded-lg'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Image
              src={anestlogo}
              alt='Anest Iwata'
              width={300}
              height={300}
              className='max-w-full h-auto'
            />
            <Image
              src={kobelco}
              alt='Kobelco'
              width={200}
              height={200}
              className='max-w-full h-auto'
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
