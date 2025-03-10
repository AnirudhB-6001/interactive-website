import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Hi, I'm <span className="highlight">Anirudh Batra</span></h1>
        <p>Sales Strategist | Emerging Tech | MicroSaaS Builder</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn primary">View My Projects</Link>
          <Link to="/blog" className="btn secondary">Read My Blog</Link>
        </div>
      </div>

      {/* Interactive Resume Section */}
      <div className="resume-section">
        <h2>My Career Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="year">2024</span>
            <p>Started learning full-stack development.</p>
          </div>
          <div className="timeline-item">
            <span className="year">2025</span>
            <p>Built my first MicroSaaS project.</p>
          </div>
          <div className="timeline-item">
            <span className="year">Future</span>
            <p>Expanding into AI-driven tools.</p>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>📍 Map Bot</h3>
            <p>Interactive maps with real-time data.</p>
            <Link to="/projects">Learn More →</Link>
          </div>
          <div className="project-card">
            <h3>📈 Sales Forecasting Tool</h3>
            <p>Predict sales trends with AI.</p>
            <Link to="/projects">Try It →</Link>
          </div>
          <div className="project-card">
            <h3>🔒 CTF Cybersecurity Game</h3>
            <p>Test your hacking skills.</p>
            <Link to="/projects">Play Now →</Link>
          </div>
        </div>
      </div>

      {/* Contact & Social */}
      <div className="contact-section">
        <h2>Get in Touch</h2>
        <p>Let's connect and build something amazing.</p>
        <div className="social-links">
          <a href="https://github.com/AnirudhB-6001" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/anirudh-batra" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Home;