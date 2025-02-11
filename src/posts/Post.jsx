import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";

function Post() {
  const { slug } = useParams();
  const [postContent, setPostContent] = useState("");
  const [metadata, setMetadata] = useState({ title: "", date: "", image: "" });

  useEffect(() => {
    async function fetchPost() {
      try {
        const post = await import(`../posts/${slug}.md`);
        const response = await fetch(post.default);
        const content = await response.text();
        const { metadata, body } = parseMarkdown(content);
        setMetadata(metadata);
        setPostContent(body);
      } catch (error) {
        console.error("Error loading post:", error);
      }
    }

    fetchPost();
  }, [slug]);

  function parseMarkdown(markdown) {
    const metadataMatch = markdown.match(/---\n([\s\S]+?)\n---/);
    const metadata = {};
    let body = markdown;

    if (metadataMatch) {
      metadataMatch[1].split("\n").forEach((line) => {
        const [key, value] = line.split(":").map((str) => str.trim());
        metadata[key] = value.replace(/['"]/g, "");
      });
      body = markdown.replace(metadataMatch[0], "").trim();
    }

    return { metadata, body };
  }

  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>{metadata.date}</p>
      {metadata.image && <img src={metadata.image} alt={metadata.title} />}
      <div dangerouslySetInnerHTML={{ __html: marked(postContent) }} />
    </div>
  );
}

export default Post;