import React, { useState, useEffect } from "react";
import "../styles/about.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch("/data/aboutData.json")
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error("Error loading about data:", error));
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div className="about-container">
      
      {/* Introduction */}
      <section className="about-intro">
        <h1>About Me</h1>
        <p>{aboutData.bio}</p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>💡 Key Skills</h2>
        <ul>
          {aboutData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Career Timeline */}
      <section className="career-timeline">
        <h2>📌 Career Highlights</h2>
        <div className="timeline">
          {aboutData.careerHighlights.map((highlight, index) => (
            <div key={index} className="timeline-item">
              <span className="year">{highlight.year}</span>
              <div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="contact-section">
        <h2>📩 Connect With Me</h2>
        <div className="social-links">
          <a href={aboutData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={aboutData.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={aboutData.socialLinks.email}>Email</a>
        </div>
      </section>
      
    </div>
  );
};

export default About;