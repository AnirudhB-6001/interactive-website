import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// Function to fetch all Markdown files dynamically
const fetchMarkdownFiles = async () => {
  try {
    const response = await fetch("/posts/index.json");
    if (!response.ok) throw new Error("Failed to fetch posts index.");
    return await response.json(); // Returns an array of file names
  } catch (error) {
    console.error("Error fetching post index:", error);
    return [];
  }
};

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const postFiles = await fetchMarkdownFiles(); // Fetch the list of markdown files

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
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div key={index} className="mb-8 border-b pb-4">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default Blog;