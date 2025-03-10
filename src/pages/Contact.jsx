import { useState } from "react";
import "../styles/contact.css";  // Ensure styles are applied

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mzzebdqo", {  // Replace with your Formspree ID
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="text-3xl font-bold text-center">Contact Me</h1>
      <p className="text-center">Feel free to reach out via the form below or connect on social media.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {status && <p className="status-message">{status}</p>}

      <div className="social-links">
        <a href="https://www.linkedin.com/in/anirudh-batra-bd" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/AnirudhB-6001" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}