/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Button = ({
  text = 'Lets Talk',
  bgColor = 'bg-transparent',
  hoverBgColor = 'bg-[#FFD400]',
  textColor = 'text-white',
  hoverTextColor = 'text-black',
  borderColor = 'border-white',
  hoverBorderColor = 'border-[#FFD400]',
  icon: Icon = Send,
  link = '/contact',
  iconSize = 20,
  className = '',
}) => {
  return (
    <div className='group inline-block'>
      <motion.a
        href={link}
        className='inline-block'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}>
        <motion.button
          initial={{
            backgroundColor: 'transparent',
            scale: 1,
            rotateX: 0,
            rotateY: 0,
          }}
          whileHover={{
            backgroundColor: hoverBgColor.replace('bg-', ''),
            scale: 1.05,
            rotateX: 5,
            rotateY: -5,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 10,
            },
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 10,
          }}
          className={`
            ${bgColor} 
            ${borderColor}
            ${textColor}
            border 
            rounded-full 
            py-2 
            px-4 
            flex 
            gap-2 
            items-center 
            justify-center
            text-sm
            font-medium
            outline-none
            focus:ring-2
            focus:ring-opacity-50
            focus:ring-[#FFD400]
            transition-all
            duration-300
            origin-center
            group-hover:shadow-lg
            group-hover:shadow-[#FFD400]/30
            ${className}
          `}>
          <motion.span
            initial={{ opacity: 1 }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            className='mr-2 group-hover:text-black transition-colors'>
            {text}
          </motion.span>
          {Icon && (
            <motion.div
              initial={{
                rotate: 0,
                scale: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                rotate: [0, 20, -10, 0],
                scale: 1.2,
                x: 5,
                y: -5,
                transition: {
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 300,
                },
              }}
              className='group-hover:text-black transition-colors'>
              <Icon size={iconSize} />
            </motion.div>
          )}
        </motion.button>
      </motion.a>
    </div>
  );
};

export default Button;
