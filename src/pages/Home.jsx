import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"; // Ensure this path matches your project structure

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero">
        <h1>Hi, I'm <span className="highlight">Anirudh Batra</span></h1>
        <p>Tech-Savvy Sales & GTM Specialist | SaaS | AI & Emerging Tech</p>
        <div className="cta-buttons">
          <a href="/about" className="btn primary">About Me</a>
          <a href="/projects" className="btn secondary">My Projects</a>
        </div>
      </section>

      {/* Resume Timeline Section */}
      <section className="resume-section">
        <h2>📌 My Career Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="year">2025</span> - Started building my first <strong>MicroSaaS</strong> project.
          </div>
          <div className="timeline-item">
            <span className="year">2024</span> - Pivoted from Sales to Tech, learning React, Flask & AI tools.
          </div>
          <div className="timeline-item">
            <span className="year">2018-2024</span> - Global GTM Strategies, Sales & Marketing for Emerging Tech.
          </div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="projects-section">
        <h2>🚀 Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Sales Forecasting Tool</h3>
            <p>An AI-driven MicroSaaS that helps sales managers predict revenue.</p>
            <Link to="/blog">Read More</Link>
          </div>
          <div className="project-card">
            <h3>Map Bot</h3>
            <p>Interactive AI-powered bot providing economic insights & visual maps.</p>
            <Link to="/blog">Read More</Link>
          </div>
          <div className="project-card">
            <h3>CTF Game</h3>
            <p>A cybersecurity learning game with hacking challenges.</p>
            <Link to="/blog">Read More</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>📩 Let's Connect</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/anirudh-batra-bd" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/AnirudhB-6001" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:contact@anirudhbatraofficial.com">Email</a>
        </div>
      </section>

    </div>
  );
};

export default Home;