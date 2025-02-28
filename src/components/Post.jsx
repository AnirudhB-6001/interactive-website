import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Post = ({ post }) => {
  return (
    <div className="blog-post">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-gray-500">{post.date}</p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
    </div>
  );
};

export default Post;