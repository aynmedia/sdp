/** @format */

import { Suspense } from 'react';
import { BlogClient } from './blogs';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// Loading component
function LoadingPosts() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {[...Array(9)].map((_, i) => (
        <Card key={i} className='animate-pulse bg-white rounded-xl shadow-lg'>
          <CardHeader>
            <div className='w-full h-56 bg-gray-200 rounded-xl'></div>
            <div className='h-6 bg-gray-200 rounded mt-4'></div>
          </CardHeader>
          <CardContent>
            <div className='space-y-3'>
              <div className='h-4 bg-gray-200 rounded'></div>
              <div className='h-4 bg-gray-200 rounded'></div>
              <div className='h-4 bg-gray-200 rounded'></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Function to fetch posts
async function getPosts(page) {
  try {
    const res = await fetch(
      `https://sdpneumatics.in/backend/wp-json/wp/v2/posts?page=${page}&per_page=1&_embed`,
      { next: { revalidate: 3600 } }
    );

    const totalPosts = parseInt(res.headers.get('X-WP-Total'));
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages'));
    const posts = await res.json();

    return {
      posts,
      totalPages,
      totalPosts,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      posts: [],
      totalPages: 0,
      totalPosts: 0,
    };
  }
}

export const metadata = {
  title: 'Blog | Your Site Name',
  description: 'Read our latest blog posts',
};

export default async function Blog({ searchParams }) {
  const currentPage = parseInt(searchParams?.page) || 1;
  const { posts, totalPages, totalPosts } = await getPosts(currentPage);

  return (
    <Suspense fallback={<LoadingPosts />}>
      <BlogClient
        posts={posts}
        totalPosts={totalPosts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </Suspense>
  );
}
