/** @format */

import React from 'react';
import automobile from '@/../public/images/presence/SDP_Automobile_Industry_Img.png';
import machinery from '@/../public/images/presence/SDP_Machinery_Industry_Updated.png';
import printing from '@/../public/images/presence/SDP_Printing_Industry.png';
import pharmaceutical from '@/../public/images/presence/SDP_Pharmaceutical_Industry_Updated.png';
import mining from '@/../public/images/presence/SDP_Mining_Industry_Updated.png';
import solar from '@/../public/images/presence/SDP_Solar_Industry.png';
import packaging from '@/../public/images/presence/SDP_Packaging_Industry.png';
import textile from '@/../public/images/presence/SDP_Textile_Industry.png';
import food from '@/../public/images/presence/SDP_Food_Industry.png';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Marquee from '@/components/ui/marquee';

const data = [
  {
    category: 'Automobile Industry',
    number: '01',
    description:
      'Our advanced pneumatic systems are designed to enhance efficiency and precision in the automobile industry. From assembly lines to automotive maintenance, our solutions ensure optimal performance, reducing downtime and improving overall productivity.',
    image: automobile,
  },
  {
    category: 'Machinery Industry',
    number: '02',
    description:
      'We provide high-performance pneumatic tools and components that are essential for the machinery industry. Our products are engineered for durability and reliability, enabling smooth operations and enhancing the capabilities of industrial machinery.',
    image: machinery,
  },
  {
    category: 'Printing Industry',
    number: '03',
    description:
      'Our pneumatic solutions play a crucial role in the printing industry by ensuring precise control and smooth operation of printing machinery. From material handling to automated printing processes, our systems help improve print quality, enhance efficiency, and reduce production downtime.',
    image: printing,
  },
  {
    category: 'Pharmaceutical Industry',
    number: '04',
    description:
      'Our pneumatic systems are vital for the pharmaceutical industry, offering reliable and contamination-free solutions for manufacturing, packaging, and processing. Designed to meet stringent hygiene standards, our products ensure precision, efficiency, and safety in handling sensitive pharmaceutical materials and equipment.',
    image: pharmaceutical,
  },
  {
    category: 'Mining Industry',
    number: '05',
    description:
      'In the mining industry, our robust pneumatic solutions are built to withstand harsh environments and demanding operations. From powering drilling equipment to material extraction and transportation, our systems ensure safety, reliability, and efficiency, helping to streamline mining processes and reduce operational costs.',
    image: mining,
  },
  {
    category: 'Solar Industry',
    number: '06',
    description:
      'Our pneumatic solutions support the solar industry by enhancing the efficiency of manufacturing processes for solar panels and related components. From assembly automation to precision handling, our systems help optimize production, reduce downtime, and improve the overall quality and reliability of solar energy solutions.',
    image: solar,
  },
  {
    category: 'Packaging Industry',
    number: '07',
    description:
      'In the packaging industry, our pneumatic systems play a crucial role in automating processes such as filling, sealing, labeling, and material handling. Offering speed, precision, and durability, our solutions help streamline operations, reduce waste, and ensure consistent packaging quality across various industries.',
    image: packaging,
  },
  {
    category: 'Textile Industry',
    number: '08',
    description:
      'Our pneumatic systems in the textile industry ensure smooth operation in processes like weaving, spinning, dyeing, and material handling. By delivering precision and efficiency, our solutions help improve production speed, reduce energy consumption, and maintain the high-quality standards necessary for textile manufacturing.',
    image: textile,
  },
  {
    category: 'Food Industry',
    number: '09',
    description:
      'In the food industry, our pneumatic solutions provide reliable and hygienic automation for processes such as packaging, sorting, and material handling. Designed to meet strict safety and sanitation standards, our systems help optimize efficiency, minimize contamination risks, and ensure consistent product quality across all stages of food production.',
    image: food,
  },
];

const firstRow = data.slice(0, data.length / 2);
const secondRow = data.slice(data.length / 2);
const ReviewCard = ({ image, category, username, body }) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}>
      <Image
        src={image}
        className='rounded-md'
        width={700}
        height={700}
        alt='category'
      />
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4'>
        <figcaption className='text-sm font-medium text-white'>
          {category}
        </figcaption>
        {/* <p className='text-xs font-medium text-white/40'>{username}</p> */}
      </div>
    </figure>
  );
};
const Presence = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto text-center'>
        {' '}
        <h1 className='text-3xl font-semibold mt-2'>Industry Applications</h1>
        <h2 className='text-base max-w-2xl mx-auto my-2'>
          With a strong foundation in global expertise, we provide trusted
          solutions that cater to diverse industries, consistently delivering
          exceptional performance and groundbreaking innovation worldwide.
        </h2>
      </div>
      <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden'>
        <Marquee pauseOnHover className='[--duration:20s]'>
          {firstRow.map((data) => (
            <ReviewCard key={data.number} {...data} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:20s]'>
          {secondRow.map((data) => (
            <ReviewCard key={data.number} {...data} />
          ))}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white'></div>
      </div>
    </div>
  );
};

export default Presence;
