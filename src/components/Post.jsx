import React from 'react';

export default function Post({ post }) {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p><em>{post.date}</em></p>
      <div className="post-body">
        <p>{post.body}</p>
      </div>
    </div>
  );
}
