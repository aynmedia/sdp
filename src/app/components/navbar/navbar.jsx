/** @format */
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, Send, X } from 'lucide-react';
import Image from 'next/image';
import logo from '@/../public/images/logo.png';
import { RainbowButton } from '@/components/ui/rainbow-button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/company', label: 'Company' },
    { href: '/products', label: 'Products' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleScroll = () => {
    const scrollThreshold = 80; // Adjust this value to trigger the color change sooner or later
    setScrolled(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 10,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? 'bg-primary text-white' : 'bg-transparent text-black'
      } transition-colors duration-50 ease-in-out`}>
      {/* Desktop Navbar */}
      <div className='hidden md:flex justify-between items-center p-4 md:max-w-7xl container mx-auto'>
        <Link href='/' className='text-2xl font-bold'>
          <Image src={logo} alt='SD Pneumatics' width={100} height={50}></Image>
        </Link>
        <div className='flex space-x-12'>
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}>
              <Link
                href={item.href}
                className='hover:text-gray-300 transition-colors duration-300 font-bold'>
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <RainbowButton>
          Lets Talk <Send className='ml-4' size={18} />
        </RainbowButton>
      </div>

      {/* Mobile Navbar */}
      <div className='md:hidden'>
        {/* Mobile Header */}
        <div className='flex justify-between items-center p-4'>
          <Link href='/' className='text-2xl font-bold'>
            <Image
              src={logo}
              alt='SD Pneumatics'
              width={100}
              height={50}></Image>
          </Link>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className='z-50'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode='wait'>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='fixed inset-0 bg-black/90 flex flex-col justify-center items-center space-y-6'
              // Add click outside to close menu
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsOpen(false);
                }
              }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={linkVariants}
                  initial='hidden'
                  animate='visible'
                  whileHover='hover'>
                  <Link
                    href={item.href}
                    className='text-white text-2xl hover:text-gray-300 transition-colors duration-300'
                    onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
