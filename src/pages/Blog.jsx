import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const postFiles = ["2025-02-15-my-first-post.md"]; // Future: Fetch dynamically

      const fetchedPosts = await Promise.all(
        postFiles.map(async (file) => {
          const response = await fetch(`/posts/${file}`);
          const text = await response.text();
          return { file, content: text };
        })
      );

      setPosts(fetchedPosts);
    }

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      {posts.map((post, index) => (
        <div key={index} className="mb-8 border-b pb-4">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default Blog;
