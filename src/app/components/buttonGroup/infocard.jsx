/** @format */
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Infocard = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='sm:first:col-span-2 py-14 px-11 rounded-lg max-w-lg'
        style={{ backgroundColor: '#ffddd2' }}>
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='mb-4 text-black text-xl font-bold leading-none'>
          <span>Pneumatic Solutions Tailored for You</span>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-base text-black leading-[1.8]'>
          <p>
            Discover cutting-edge pneumatic technologies designed to optimize
            your industrial processes. Our expert team provides innovative
            solutions that enhance efficiency, reliability, and performance.
          </p>
        </motion.div>

        <motion.ul
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
              },
            },
          }}
          className='mt-6 sm:mt-10'>
          {[
            'Request Quote',
            'Request Spare Parts',
            'Services & Support',
            'Contact Us',
          ].map((item, index) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className='pt-2 pb-4 mb-2 last:mb-0 border-b border-black border-solid'>
              <a
                className='flex items-center justify-between text-black hover:text-black text-lg sm:text-xl font-medium'
                href='#'>
                <span>{item}</span>
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4.00002 7.45035e-05L13 7.42506e-05C13.5523 7.45035e-05 14 0.44779 14 1.00007V10.0001C14 10.5524 13.5523 11.0001 13 11.0001C12.4477 11.0001 12 10.5524 12 10.0001V3.41429L1.70712 13.7072L0.292908 12.293L10.5858 2.00007L4.00002 2.00007C3.44773 2.00007 3.00002 1.55236 3.00002 1.00007C3.00002 0.44779 3.44773 7.41663e-05 4.00002 7.45035e-05Z'
                    fill='black'></path>
                </svg>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Infocard;
