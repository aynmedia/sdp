/** @format */
'use client';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const BentoGrid = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className='grid grid-cols-4 grid-rows-5 gap-4 h-[1000px] max-w-full max-h-[1000px] overflow-hidden'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center justify-center p-4 ${item.bgColor}`}
              style={{
                gridColumn: `span ${item.colSpan || 1}`,
                gridRow: `span ${item.rowSpan || 1}`,
              }}
              variants={itemVariants}
              whileHover='hover'>
              <Image
                src={item.image.src}
                alt={item.title}
                fill
                className='w-full h-full object-cover rounded-lg'
              />
              <div
                className='
                  absolute 
                  bottom-0 
                  left-0 
                  right-0 
                  bg-black 
                  bg-opacity-50 
                  p-4
                '>
                <h3 className='text-white text-lg font-semibold'>
                  {item.title}
                </h3>
                {item.description && (
                  <p className='text-white text-sm mt-1 opacity-75'>
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

BentoGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      colSpan: PropTypes.number,
      rowSpan: PropTypes.number,
      bgColor: PropTypes.string,
    })
  ).isRequired,
};

export default BentoGrid;
