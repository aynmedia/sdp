/** @format */

// app/blog/[slug]/page.js
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getPost(slug) {
  try {
    const res = await fetch(
      `https://sdpneumatics.in/backend/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return null;
    }

    const posts = await res.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title.rendered} | Blog`,
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160),
  };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className='min-h-screen bg-gray-50 pt-24'>
      <div className='container max-w-7xl mx-auto px-4 py-12'>
        {/* Back button */}
        <Link
          href='/blog'
          className='inline-flex items-center text-amber-500 hover:text-amber-600 font-medium mb-8 transition-colors duration-200'>
          <svg
            className='w-4 h-4 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 16l-4-4m0 0l4-4m-4 4h18'
            />
          </svg>
          Back to Blog
        </Link>

        {/* Featured Image */}
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <div className='relative w-full h-[400px] mb-8 rounded-xl overflow-hidden'>
            <Image
              src={post._embedded['wp:featuredmedia'][0].source_url}
              fill
              style={{ objectFit: 'cover' }}
              alt={post.title.rendered}
              priority
              className='transition-transform duration-300'
            />
          </div>
        )}

        {/* Post Header */}
        <header className='mb-8'>
          <h1
            className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div className='text-amber-500 font-medium'>
            {formatDate(post.date)}
          </div>
        </header>

        {/* Post Content */}
        <div
          className='prose prose-lg max-w-none leading-loose'
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Tags and Categories */}
        {post._embedded?.['wp:term'] && (
          <div className='mt-12 pt-8 border-t border-gray-200'>
            {post._embedded['wp:term'].map(
              (terms, index) =>
                terms.length > 0 && (
                  <div key={index} className='flex gap-2 mb-4'>
                    <span className='text-gray-600 font-medium'>
                      {terms[0].taxonomy === 'category'
                        ? 'Categories:'
                        : 'Tags:'}
                    </span>
                    <div className='flex gap-2 flex-wrap'>
                      {terms.map((term) => (
                        <span
                          key={term.id}
                          className='bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm'>
                          {term.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </article>
  );
}
