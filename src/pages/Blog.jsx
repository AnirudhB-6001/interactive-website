import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../styles/blog.css";

// Function to fetch all Markdown files dynamically
const fetchMarkdownFiles = async () => {
  try {
    const response = await fetch("/posts/index.json");
    if (!response.ok) throw new Error("Failed to fetch posts index.");
    return await response.json();
  } catch (error) {
    console.error("Error fetching post index:", error);
    return [];
  }
};

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const postFiles = await fetchMarkdownFiles();
      const fetchedPosts = await Promise.all(
        postFiles.map(async (file) => {
          const response = await fetch(`/posts/${file}`);
          const text = await response.text();
          return { file, content: text, date: file.split("-").slice(0, 3).join("-") };
        })
      );

      // Sort posts by date (newest first)
      fetchedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

      setPosts(fetchedPosts);
    }

    fetchPosts();
  }, []);

  return (
    <div className="blog-container flex flex-col md:flex-row p-6">
      {/* Main Blog Content */}
      <div className="blog-content w-full md:w-3/4 pr-6">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="mb-8 border-b pb-4">
              <h2 className="text-2xl font-semibold">
                {post.file.replace(/-/g, " ").replace(".md", "")}
              </h2>
              <p className="text-gray-600 text-sm">Published on: {post.date}</p>
              <p className="mt-2">{post.content.split(" ").slice(0, 30).join(" ")}...</p>
              <Link to={`/blog/${post.file}`} className="text-blue-500 underline">
                Read More
              </Link>
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>

      {/* Sidebar with Recent Posts */}
      <div className="blog-sidebar w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <ul>
          {posts.slice(0, 5).map((post, index) => (
            <li key={index} className="mb-2">
              <Link to={`/blog/${post.file}`} className="text-blue-500 hover:underline">
                {post.file.replace(/-/g, " ").replace(".md", "")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;