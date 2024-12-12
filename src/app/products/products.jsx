/** @format */
'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Products = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch('https://sdpneumatics.in/backend/wp-json/wp/v2/posts')
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
          <h1>{post.title.rendered}</h1>
          {/* <p>{post.excerpt.rendered}</p> */}
          <Image
            src={post.featured_media}
            alt={post.title.rendered}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
