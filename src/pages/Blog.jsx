import React from 'react';
import Post from '../components/Post';

// Import blog posts data
const posts = [
  {
    title: 'My First Blog Post',
    date: '2025-02-12',
    body: `This is the content of my first blog post! Stay tuned for more updates.`,
  },
  // Add more posts here if needed
];

export default function Blog() {
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <p>Stay updated with my latest posts.</p>
      <div className="posts-list">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
