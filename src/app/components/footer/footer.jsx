/** @format */

'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { z } from 'zod';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import map from '@/../public/images/map.png';
import logo from '@/../public/images/logo.png';
import FooterCall from '../footercallaction/footercall';

// Zod schema for form validation
const FeedbackSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: 'Invalid Indian phone number' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' }),
});

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const info = [
    { name: 'Blogs', href: '/' },
    { name: 'Products', href: '/' },
    { name: 'Services', href: '/' },
  ];

  const about = [
    { name: 'About Us', href: '/' },
    { name: 'Contact Us', href: '/' },
    { name: 'FAQ', href: '/' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate the form data
      const validatedData = FeedbackSchema.parse(formData);

      // TODO: Implement actual form submission logic
      console.log('Form submitted:', validatedData);

      // Reset form and clear errors
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more manageable format
        const newErrors = {};
        error.errors.forEach((err) => {
          if (err.path.length > 0) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Variants for staggered animations
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <FooterCall />
      <div className='bg-primary'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-col items-center justify-center py-16 px-4 md:px-12 lg:px-24 text-white text-center gap-4'>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='text-2xl font-bold text-[#FFD400] uppercase'>
            Ready to Elevate Your Business?
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className='text-md font-medium text-white/80 max-w-4xl'>
            Partner with us for cutting-edge pneumatic solutions tailored to
            your industry. Contact us today for personalized consultations,
            high-quality products, and exceptional service. Let&apos;s power
            your success!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-col items-center justify-center py-16 px-4 md:px-12 lg:px-24 text-white'>
          <Image src={map} alt='Map' width={1000} height={500} className='' />
        </motion.div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 max-w-7xl mx-auto'>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex flex-col justify-center py-12 px-12 md:px-12 bg-[#17181C] text-white col-span-1 rounded-xl'>
            <h1 className='text-md font-medium text-[#FFD400] uppercase'>
              feedback
            </h1>
            <span className='my-4 block text-2xl font-bold'>
              Seeking personalized support?{' '}
              <span className='text-[#FFD400]'>
                Request a call from our team
              </span>
            </span>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <motion.div
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                variants={containerVariants}>
                <motion.input
                  variants={itemVariants}
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Your Name'
                  className={`w-full p-2 bg-[#22252A] rounded text-white 
                  ${errors.name ? 'border-2 border-red-500' : ''}`}
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-red-500 text-sm mt-1'>
                    {errors.name}
                  </motion.p>
                )}

                <motion.input
                  variants={itemVariants}
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Email Address'
                  className={`w-full p-2 bg-[#22252A] rounded text-white mt-4
                  ${errors.email ? 'border-2 border-red-500' : ''}`}
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-red-500 text-sm mt-1'>
                    {errors.email}
                  </motion.p>
                )}

                <motion.input
                  variants={itemVariants}
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='Phone Number'
                  className={`w-full p-2 bg-[#22252A] rounded text-white mt-4
                  ${errors.phone ? 'border-2 border-red-500' : ''}`}
                />
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-red-500 text-sm mt-1'>
                    {errors.phone}
                  </motion.p>
                )}

                <motion.textarea
                  variants={itemVariants}
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Your Message'
                  className={`w-full p-2 bg-[#22252A] rounded text-white h-24 mt-4
                  ${errors.message ? 'border-2 border-red-500' : ''}`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-red-500 text-sm mt-1'>
                    {errors.message}
                  </motion.p>
                )}

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full p-3 bg-[#FFD400] text-black rounded 
                  font-bold uppercase hover:bg-[#FFD400]/90 
                  disabled:opacity-50 mt-4'>
                  {isSubmitting ? 'Submitting...' : 'Request Call Back'}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='grid grid-cols-1 col-span-2 md:grid-cols-3 py-16 px-4 md:px-12 lg:px-24 text-white'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}>
              <h1 className='text-md font-medium text-[#FFD400] uppercase'>
                Info
              </h1>{' '}
              <div className='my-4 flex flex-col gap-4'>
                {info.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <h1 className='text-base font-medium text-white/80 hover:text-white'>
                      {item.name}
                    </h1>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}>
              <h1 className='text-md font-medium text-[#FFD400] uppercase'>
                About Us
              </h1>
              <div className='my-4 flex flex-col gap-4'>
                {about.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <h1 className='text-base font-medium text-white/80 hover:text-white'>
                      {item.name}
                    </h1>
                  </Link>
                ))}
              </div>
            </motion.div>

            <div className='hidden md:flex justify-end'>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}>
                <Image
                  src={logo}
                  alt='Logo'
                  width={200}
                  height={25}
                  className=''
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}>
              <h1 className='text-base font-medium text-[#FFD400] uppercase my-4'>
                Contact Us
              </h1>
              <div className='text-base font-medium text-white/80 hover:text-white flex flex-col gap-4'>
                <p>E: care@sdpneumatics.com</p>
                <p> P: +91 99865 23331</p>
                <p>
                  A: 456, 4th Main Rd, Manjunath Nagar, Basaveshwar Nagar,
                  Bengaluru, Karnataka 560010
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='max-w-7xl mx-auto py-4'>
          <div className='text-sm font-medium text-white/20  flex flex-row gap-4 justify-between'>
            <p>
              &copy; {new Date().getFullYear()} SD Pneumatics. All rights
              reserved.
            </p>
            <span>
              Powered by{' '}
              <Link
                href='https://ayntech.in/'
                className='text-white/30 hover:text-white/50 '>
                Ayn Tech Pvt. Ltd.{' '}
              </Link>
            </span>
          </div>
        </motion.div>
      </div>{' '}
    </>
  );
};

export default Footer;
