import React from "react";
import "../styles/projects.css";

const projects = [
  {
    name: "🗺️ Map Bot",
    description: "AI-powered bot for generating economic & financial data maps.",
    link: "/blog/2025-02-12-map-bot-intro.md"
  },
  {
    name: "📊 Sales Forecasting Tool",
    description: "Predictive analytics tool for sales managers.",
    link: "/blog/2025-03-01-interactive-website-vision.md"
  },
  {
    name: "🔐 CTF Cybersecurity Game",
    description: "An interactive Capture-the-Flag game to learn cybersecurity.",
    link: "/blog/2025-02-15-setting-the-foundations.md"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>📂 Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
