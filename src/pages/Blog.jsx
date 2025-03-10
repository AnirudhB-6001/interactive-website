import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../styles/blog.css";

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
  const [postsByProject, setPostsByProject] = useState({});
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      const postEntries = await fetchMarkdownFiles();

      const fetchedPosts = await Promise.all(
        postEntries.map(async ({ file, project }) => {
          const response = await fetch(`/posts/${file}`);
          const text = await response.text();
          return { file, content: text, date: file.split("-").slice(0, 3).join("-"), project };
        })
      );

      fetchedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

      const grouped = fetchedPosts.reduce((acc, post) => {
        if (!acc[post.project]) acc[post.project] = [];
        acc[post.project].push(post);
        return acc;
      }, {});

      setPostsByProject(grouped);
    }

    fetchPosts();
  }, []);

  return (
    <div className="blog-container">
      {/* Blog Content */}
      <div className="blog-content">
        <h1 className="text-4xl font-bold mb-6">📖 Blog</h1>
        {Object.keys(postsByProject).length > 0 ? (
          Object.keys(postsByProject).map((project, index) => (
            <div key={index} className="mb-6">
              <h2 onClick={() => setExpandedProject(expandedProject === project ? null : project)}>
                {project} {expandedProject === project ? "🔽" : "▶"}
              </h2>

              {expandedProject === project &&
                postsByProject[project].map((post, idx) => (
                  <div key={idx} className="blog-post">
                    <h3>{post.file.replace(/-/g, " ").replace(".md", "")}</h3>
                    <p className="text-gray-600 text-sm">📅 {post.date}</p>
                    <p className="mt-2">{post.content.split(" ").slice(0, 30).join(" ")}...</p>
                    <Link to={`/blog/${post.file}`} className="text-blue-500 underline">
                      Read More →
                    </Link>
                  </div>
                ))}
            </div>
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>

      {/* Sidebar */}
      <div className="blog-sidebar">
        <h3>Recent Posts</h3>
        <ul>
          {Object.values(postsByProject)
            .flat()
            .slice(0, 5)
            .map((post, index) => (
              <li key={index}>
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