/** @format */

'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Products() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          'https://sdpneumatics.in/backend/wp-json/wp/v2/products'
        );
        const data = await res.json();

        const productWithImages = await Promise.all(
          data.map(async (product) => {
            const mediaRes = await fetch(
              `https://sdpneumatics.in/backend/wp-json/wp/v2/media?${product.id}`
            );
            const mediaData = await mediaRes.json();

            return {
              ...product,
              featured_media: mediaData[0].source_url,
            };
          })
        );
        setPosts(productWithImages);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {error ? (
            <p>Error: {error.message}</p>
          ) : (
            <div>
              {posts.map((post) => (
                <div key={post.id}>
                  <h2>{post.title.rendered}</h2>
                  <p>{post.content.rendered}</p>
                  <Image
                    src={post.featured_media}
                    alt={post.title.rendered}
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
