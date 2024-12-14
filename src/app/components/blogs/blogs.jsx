/** @format */

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LatestPostsWidget() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        setLoading(true);

        // Fetch posts with _embed to get additional data
        const res = await fetch(
          'https://sdpneumatics.in/backend/wp-json/wp/v2/posts?per_page=4&_embed'
        );

        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await res.json();

        // Process posts to extract featured image and author
        const processedPosts = await Promise.all(
          data.map(async (post) => {
            // Extract featured image
            const featuredImage =
              post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
              '/placeholder-image.jpg';

            // Extract author name
            const authorName =
              post._embedded?.author?.[0]?.name || 'Unknown Author';

            return {
              ...post,
              featuredImage,
              authorName,
            };
          })
        );

        setPosts(processedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError(error);
        setLoading(false);
      }
    }

    fetchLatestPosts();
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-64'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-700'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center text-red-500 p-4'>Error loading posts</div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto px-4 pb-12 pt-8'>
      <h2 className='text-3xl font-bold mb-6 text-center'>Latest Posts</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {posts.map((post) => (
          <div
            key={post.id}
            className='bg-white rounded-lg overflow-hidden border'>
            {/* Featured Image */}
            <div className='relative w-full h-48'>
              <Image
                src={post.featuredImage}
                alt={post.title.rendered}
                fill
                className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>

            {/* Post Content */}
            <div className='p-4'>
              {/* Post Title */}
              <h3 className='text-xl font-semibold mb-2 line-clamp-2'>
                {post.title.rendered}
              </h3>

              {/* Author and Date */}
              <div className='text-sm text-gray-600 mb-2'>
                <span>{post.authorName}</span>
                <span className='mx-2'>•</span>
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Read More Link */}
              <Link
                href={`/posts/${post.slug}`}
                className='text-blue-600 hover:text-blue-800 transition-colors'>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
