import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../styles/blog.css";

const Post = ({ post, prevPost, nextPost }) => {
  return (
    <div className="blog-post">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-gray-500">{post.date}</p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>

      {/* Blog Navigation */}
      <div className="blog-navigation flex justify-between mt-6 border-t pt-4">
        {prevPost && (
          <Link to={`/blog/${prevPost.file}`} className="text-blue-500 hover:underline">
            ⬅ Previous Post: {prevPost.title}
          </Link>
        )}
        {nextPost && (
          <Link to={`/blog/${nextPost.file}`} className="text-blue-500 hover:underline">
            Next Post: {nextPost.title} ➡
          </Link>
        )}
      </div>
    </div>
  );
};

export default Post;