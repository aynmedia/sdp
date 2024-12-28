/** @format */

// app/blog/blogs.js
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import hero from '@/../public/images/hero.png';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const stripHtml = (html) => {
  return html.replace(/<[^>]*>/g, '');
};

function PaginationControls({ currentPage, totalPages }) {
  if (totalPages <= 1) return null;

  return (
    <div className='flex justify-center items-center space-x-4'>
      <Link
        href={`/blogs?page=${currentPage - 1}`}
        className={`px-6 py-3 rounded-lg transition-all duration-200 ${
          currentPage <= 1
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none'
            : 'bg-blue-800 text-white hover:bg-blue-900 hover:shadow-lg'
        }`}
        aria-disabled={currentPage <= 1}>
        Previous
      </Link>

      <span className='text-gray-600 font-medium'>
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={`/blogs?page=${currentPage + 1}`}
        className={`px-6 py-3 rounded-lg transition-all duration-200 ${
          currentPage >= totalPages
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed pointer-events-none'
            : 'bg-blue-800 text-white hover:bg-blue-900 hover:shadow-lg'
        }`}
        aria-disabled={currentPage >= totalPages}>
        Next
      </Link>
    </div>
  );
}

export function BlogClient({ posts, totalPosts, currentPage, totalPages }) {
  return (
    <div className='relative min-h-screen bg-gray-50'>
      <div className='relative h-[50vh] bg-gradient-to-r from-amber-400 to-amber-600'>
        <Image
          src={hero}
          alt='Hero image'
          fill
          priority
          style={{ objectFit: 'cover' }}
          className='w-full h-full'
        />
        <div className='absolute top-0 left-0 w-full h-full z-10 bg-black/20'></div>
        <div className='mb-12 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <h1 className='text-5xl font-bold mb-4 text-black'>News & Updates</h1>
          <p className='text-white text-lg'>
            {totalPosts} inspiring stories to explore
          </p>
        </div>
      </div>

      <div className='container max-w-7xl mx-auto px-4 py-12'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='show'
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {posts.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <Card className='group h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden'>
                <CardHeader className='p-0'>
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className='relative h-40 overflow-hidden'>
                      <Image
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        fill
                        style={{ objectFit: 'cover' }}
                        alt={post.title.rendered}
                        className='group-hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                  )}
                  <div className='p-6'>
                    <CardTitle className='text-xl font-bold'>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className='text-gray-800 hover:text-blue-900 transition-colors duration-200'>
                        {post.title.rendered}
                      </Link>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='px-6 flex-grow'>
                  <div className='text-sm text-blue-800 font-bold mb-3'>
                    {formatDate(post.date)}
                  </div>
                  <div className='text-gray-500 line-clamp-3'>
                    {stripHtml(post.excerpt.rendered)}
                  </div>
                </CardContent>
                <CardFooter className='px-6 pb-6'>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='inline-flex items-center text-blue-800 hover:text-green-500 font-bold transition-colors duration-200'>
                    Read more
                    <svg
                      className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <PaginationControls currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
