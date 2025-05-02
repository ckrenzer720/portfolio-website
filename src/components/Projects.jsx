// src/components/Projects.js
import React, { useState } from "react";
import projectsData from "../backend/projectsData";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  return (
    <section id="projects">
      <h2>My Projects (so far...)</h2>
      <div id="project-grid">
        {projects.map((project) => (
          <div id="project-card" key={project.id}>
            <img id="project-image" src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Used:</strong> {project.tech.join(", ")}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
