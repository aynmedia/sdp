/** @format */

import Image from 'next/image';
import React from 'react';
import pneumatics from '@/../public/images/pneumatics.jpg';

const Calltoaction = () => {
  return (
    <div class='relative justify-center gap-6 bg-white max-w-7xl mx-6 md:mx-auto my-12 rounded-md h-44'>
      <Image
        class='object-cover overflow-hidden absolute top-0 left-0 w-full h-full rounded-md'
        src={pneumatics}
        alt='Industry Presence'
      />
      <div class='absolute top-0 left-0 w-full h-full bg-slate-900/50 rounded-md'></div>
      <div class='absolute z-10 flex text-white w-full h-full cursor-pointer flex-col md:flex-row'>
        <div class='basis-1/4 flex justify-center items-center hover:bg-green-600/50 text-md font-bold border border-r'>
          Request Quote
        </div>
        <div class='basis-1/4 flex justify-center items-center hover:bg-green-600/50 text-md font-bold border border-r'>
          Contact Us
        </div>
        <div class='basis-1/4 flex justify-center items-center hover:bg-green-600/50 text-md font-bold border border-r'>
          Request Spare Parts
        </div>
        <div class='basis-1/4 flex justify-center items-center hover:bg-green-600/50 text-md font-bold border border-l'>
          Services & Support
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
