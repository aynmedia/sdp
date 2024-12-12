/** @format */

import OrbitingCircles from '@/components/ui/orbiting-circles';
import slide1 from '@/../public/images/slide1.svg';
import slide2 from '@/../public/images/slide2.svg';
import slide3 from '@/../public/images/slide3.svg';
import slide4 from '@/../public/images/slide4.svg';

import Image from 'next/image';
import Infocard from './infocard';
export function OrbitingCirclesDemo() {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 my-12'>
      <div className='md:mt-12'>
        <Infocard />
      </div>
      <div>
        <div className='relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden'>
          <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-[#0066CA] to-[#66CC01] bg-clip-text text-center text-4xl font-semibold leading-none text-transparent '>
            SDP
          </span>

          {/* Inner Circles */}
          <OrbitingCircles
            className='size-[100px] border-none bg-transparent'
            duration={20}
            delay={20}
            radius={80}>
            <Icons.openai />
          </OrbitingCircles>
          <OrbitingCircles
            className='size-[100px] border-none bg-transparent'
            duration={20}
            delay={10}
            radius={80}>
            <Icons.notion />
          </OrbitingCircles>

          {/* Outer Circles (reverse) */}
          <OrbitingCircles
            className='size-[130px] border-none bg-transparent'
            radius={190}
            duration={20}
            reverse>
            <Icons.googleDrive />
          </OrbitingCircles>
          <OrbitingCircles
            className='size-[130px] border-none bg-transparent'
            radius={190}
            duration={20}
            delay={20}
            reverse>
            <Icons.gitHub />
          </OrbitingCircles>
        </div>
      </div>
    </div>
  );
}

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
      alt='GitHub'
      width={1000}
      height={1000}
      className='rounded-full'
    />
  ),
  openai: () => (
    <Image
      src={slide3}
      alt='GitHub'
      width={1000}
      height={1000}
      className='rounded-full'
    />
  ),
  googleDrive: () => (
    <Image
      src={slide4}
      alt='GitHub'
      width={1000}
      height={1000}
      className='rounded-full'
    />
  ),
};
