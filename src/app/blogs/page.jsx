/** @format */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogbg from '@/../public/images/hero.png';
import { stripHtml } from 'string-strip-html';

async function getAllPosts() {
  try {
    const res = await fetch(
      'https://sdpneumatics.in/backend/wp-json/wp/v2/posts?_embed=true&per_page=100'
    );
    if (!res.ok) throw new Error('Failed to fetch posts');
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function BlogIndex() {
  const posts = await getAllPosts();

  return (
    <div className='relative '>
      {/* Hero Section */}
      <div className='relative h-[50vh] w-full'>
        <Image
          src={blogbg}
          alt='Blog background'
          fill
          objectFit='cover'
          className='absolute z-0'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-white/70 to-transparent flex items-center justify-center'>
          <h1 className='text-black text-4xl font-bold drop-shadow-md'>
            Our Blog
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className='max-w-7xl mx-auto px-4 pt-12 pb-8 my-12'>
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => {
            const featuredImage =
              post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              '/default-image.jpg';
            const truncatedExcerpt =
              stripHtml(post.excerpt.rendered).result.slice(0, 100) + '...';

            return (
              <article
                key={post.id}
                className='border rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-2xl'>
                {/* Featured Image */}
                {featuredImage && (
                  <Image
                    width={400}
                    height={250}
                    src={featuredImage}
                    alt={post.title.rendered}
                    className='w-full h-[250px] object-cover'
                  />
                )}

                {/* Post Content */}
                <div className='p-6'>
                  <h2
                    className='text-xl font-bold mb-2'
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div
                    className='mb-4 text-gray-600'
                    dangerouslySetInnerHTML={{ __html: truncatedExcerpt }}
                  />
                  <div className='text-sm text-gray-500 mb-4'>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className='text-blue-600 hover:underline inline-flex items-center'>
                    Read more
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-static';
