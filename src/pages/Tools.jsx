import React, { useState, useEffect } from "react";
import "../styles/tools.css";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function fetchTools() {
      try {
        const response = await fetch("/tools.json");
        if (!response.ok) throw new Error("Failed to fetch tools.");
        const data = await response.json();
        setTools(data);
      } catch (error) {
        console.error("Error fetching tools:", error);
      }
    }

    fetchTools();
  }, []);

  return (
    <div className="tools-container">
      <h1>🛠️ Tools</h1>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;