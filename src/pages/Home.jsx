import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    fetch("/data/resumeData.json")
      .then(response => response.json())
      .then(data => setResumeData(data))
      .catch(error => console.error("Error loading resume data:", error));
  }, []);

  if (!resumeData) return <div>Loading...</div>;

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
          {resumeData.careerTimeline.map((entry, index) => (
            <div key={index} className="timeline-item">
              <span className="year">{entry.year}</span> - {entry.description}
            </div>
          ))}
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="projects-section">
        <h2>🚀 Featured Projects</h2>
        <div className="projects-grid">
          {resumeData.featuredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <Link to={project.link}>Read More</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>📩 Let's Connect</h2>
        <div className="social-links">
          <a href={resumeData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={resumeData.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={resumeData.socialLinks.email}>Email</a>
        </div>
      </section>

    </div>
  );
};

export default Home;