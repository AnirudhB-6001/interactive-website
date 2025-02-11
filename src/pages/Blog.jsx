import React from 'react';
import Post from '../components/Post';
import postsData from '../posts/posts.json';

export default function Blog() {
  return (
    <div className="blog-page">
      <h1>Blog</h1>
      <p>Stay updated with my latest posts.</p>
      <div className="posts-list">
        {postsData.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
