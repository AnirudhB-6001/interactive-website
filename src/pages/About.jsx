import React, { useState, useEffect } from "react";
import "../styles/about.css";

const About = () => {
  const [career, setCareer] = useState([]);

  useEffect(() => {
    fetch("/career.json")
      .then((response) => response.json())
      .then((data) => setCareer(data))
      .catch((error) => console.error("Error loading career timeline:", error));
  }, []);

  return (
    <div className="about-container">
      <div className="about-intro">
        <h1>About Me</h1>
        <p>
          Tech-savvy Account Management Specialist with 7+ years of experience driving revenue growth, enterprise account expansion, and strategic sales across global markets.
        </p>
      </div>

      {/* Career Timeline */}
      <div className="career-timeline">
        <h2>Career Timeline</h2>
        <div className="timeline">
          {career.map((job, index) => (
            <div key={index} className="timeline-item">
              <h3>{job.role} @ {job.company}</h3>
              <p className="year">{job.duration} | {job.location}</p>
              <ul>
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
