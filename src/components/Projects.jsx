// src/components/Projects.js
import React, { useState } from "react";
import projectsData from "../backend/projectsData";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);

  return (
    <section id="projects">
      <h2>My Projects (so far...)</h2>
      <div id="project-grid">
        {projects.length === 0 ? (
          <p>No projects to display at the moment.</p>
        ) : (
          projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                className="project-image"
                src={project.image || "default-image.jpg"}
                alt={project.title || "Project"}
                onError={(e) => (e.target.src = "default-image.jpg")}
              />
              <h3>{project.title || "Untitled Project"}</h3>
              <p>{project.description || "No description available."}</p>
              <p>
                <strong>Tech Used:</strong> {project.tech?.join(", ") || "N/A"}
              </p>
              <div className="project-links">
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View details of ${project.title}`}
                >
                  {project.link ? "View Project" : "No Link Available"}
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    View Repo on GitHub
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
