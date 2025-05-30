import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Experience from "./Experience";

function Home() {
  const technicalSkills = [
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "Express",
    "HTML/CSS",
    "SQL",
    "Git",
    "REST APIs",
    "PostgreSQL",
  ];

  const softSkills = [
    "Communication",
    "Problem Solving",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Leadership",
    "Critical Thinking",
    "Attention to Detail",
    "Creativity",
    "Emotional Intelligence",
  ];

  return (
    <>
      <div className="hero-section">
        <div className="name">Hello, I'm Conner Krenzer</div>
        <div className="profession">Full-Stack Developer</div>
        <div className="action-buttons">
          <a href="/contact" className="button">
            Get In Touch
          </a>
          <div className="social-links">
            <a
              href="https://github.com/ckrenzer720"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/conner-krenzer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/c_krenza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="home-container">
        <section className="about-section">
          <img
            src="/path-to-your-image.jpg"
            alt="Your Name"
            className="profile-image"
          />
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I grew up in the rugged beauty of Colorado, and at 18, I moved to
              California to train as a professional chef. For the next decade, I
              worked in some of the most fine dining restaurants across
              California and Colorado, blood, sweat, and tears into the kitchen;
              but by 2023, after years of culinary success, I knew it was time
              for a change. I then decided to pivot and leave the hospitality
              world behind. That's when a friend of mine mentioned going through
              BloomTech's (formerly Lambda School) full-stack web development
              bootcamp, a decision that set me on the path to becoming a
              software developer and continuing my side passion for technology.
            </p>
            <h3>Things I'm Good At</h3>
            <ul>
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
        </section>

        <section className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Technical Skills</h3>
              <select className="select">
                {technicalSkills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
            <div className="skill-card">
              <h3>Soft Skills</h3>
              <select className="select">
                {softSkills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <section className="projects-section">
          <h2>Recent Projects</h2>
          <div className="carousel">{/* Add your project carousel here */}</div>
        </section>

        <section className="experience">
          <h3>Experience</h3>
          <Experience />
        </section>
      </div>
    </>
  );
}

export default Home;
