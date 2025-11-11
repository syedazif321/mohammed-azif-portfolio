// src/components/ProjectsListPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../projectData'; // Import our data

const ProjectsListPage = () => {
  return (
    <main className="portfolio-container page-container">
      <Link to="/" className="back-link">
        <i className="fa-solid fa-arrow-left"></i>
        Back to Home
      </Link>

      <h2>My Projects</h2>

      <div className="project-grid">
        {/* Loop over the projects and create a card for each */}
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.cardImage} alt={project.title} className="project-card-image" />
            
            <h3>{project.title}</h3>
            <p>
              {/* Take the first 150 chars of overview for the description */}
              {project.overview.substring(0, 150)}...
            </p>
            <div className="project-tags">
              {/* Show the first 4 tags */}
              {project.tags.slice(0, 4).map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {/* This Link creates the correct URL, e.g., /project/pick-o-place-sort */}
            <Link to={`/project/${project.id}`} className="btn-details">View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProjectsListPage;