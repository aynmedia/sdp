/**
 * eslint-disable react/no-unescaped-entities
 *
 * @format
 */

/** @format */

'use client';
import React from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='min-h-screen bg-white pt-12'>
      {/* Hero Section with Gradient Background */}
      <div className='relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='max-w-7xl mx-auto px-4 py-24 flex flex-col lg:flex-row items-center gap-16'>
          {/* Hero Text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-6xl font-bold text-gray-900 mb-6'>
              Let&apos;s Start a
              <span className='text-blue-600'> Conversation</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl'>
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
            <motion.a
              href='#contact-form'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors'>
              Get in Touch
              <ArrowRight className='h-5 w-5' />
            </motion.a>
          </div>

          {/* Contact Info Cards */}
          <div className='flex-1 grid gap-6 w-full max-w-lg'>
            <motion.div
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              className='bg-white p-6 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-shadow'>
              <Mail className='h-8 w-8 text-blue-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Email Us
              </h3>
              <a
                href='mailto:info@example.com'
                className='text-gray-600 hover:text-blue-600 transition-colors'>
                info@example.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              transition={{ delay: 0.1 }}
              className='bg-white p-6 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-shadow'>
              <Phone className='h-8 w-8 text-blue-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Call Us
              </h3>
              <p className='text-gray-600'>+1 (555) 123-4567</p>
              <p className='text-sm text-gray-500 mt-2'>Mon-Fri, 9am-6pm EST</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              transition={{ delay: 0.2 }}
              className='bg-white p-6 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-shadow'>
              <MapPin className='h-8 w-8 text-blue-600 mb-4' />
              <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                Visit Us
              </h3>
              <p className='text-gray-600'>123 Business Street</p>
              <p className='text-gray-600'>New York, NY 10001</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Background Elements */}
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
          <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30' />
          <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30' />
        </div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='bg-white rounded-3xl shadow-lg overflow-hidden'>
            <div className='p-8'>
              <h2 className='text-3xl font-semibold text-gray-900 mb-2'>
                Our Location
              </h2>
              <p className='text-gray-600 mb-6'>Visit us at our office</p>
            </div>
            <div className='h-96 w-full'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986867659859!3d40.69714941954754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1565727759658!5m2!1sen!2sus'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        id='contact-form'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='py-24 bg-white'>
        <div className='max-w-3xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-semibold text-gray-900 mb-4'>
              Send us a Message
            </h2>
            <p className='text-gray-600'>
              Fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
              <div>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-700 mb-2'>
                  First Name
                </label>
                <input
                  type='text'
                  id='firstName'
                  className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors'
                />
              </div>
              <div>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-700 mb-2'>
                  Last Name
                </label>
                <input
                  type='text'
                  id='lastName'
                  className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors'
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors'
              />
            </div>

            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 mb-2'>
                Message
              </label>
              <textarea
                id='message'
                rows={4}
                className='w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors'
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              className='w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-medium rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-all'>
              <Send className='h-5 w-5' />
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
