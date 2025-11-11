// src/components/ProjectPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../projectData'; // Import our data
import Slider from './Slider'; // Import our Slider component

const ProjectPage = () => {
  const { id } = useParams(); // Gets the 'id' from the URL
  const project = projects.find(p => p.id === id); // Find the project in our data

  // Show error if project not found
  if (!project) {
    return (
      <main className="portfolio-container page-container">
        <h2>Project Not Found</h2>
        <Link to="/projects" className="back-link">
          <i className="fa-solid fa-arrow-left"></i>
          Back to Projects
        </Link>
      </main>
    );
  }

  // If project is found, render it:
  return (
    <main className="portfolio-container page-container">
      <Link to="/projects" className="back-link">
        <i className="fa-solid fa-arrow-left"></i>
        Back to Projects
      </Link>

      <div className="project-detail-container">
        <h2>{project.title}</h2>

        {/* Pass the images for this project to the Slider */}
        <Slider images={project.images} />

        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        
        <h3>Project Overview</h3>
        <p className="project-full-description">
          {project.overview}
        </p>

        <h3>Key Features & Technical Deep Dive</h3>
        <div className="project-full-description">
          <ul>
            {/* This renders the <strong> tags correctly */}
            {project.features.map((feature, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
            ))}
          </ul>
        </div>

        <a href={project.githubUrl} className="btn-github" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </main>
  );
};

export default ProjectPage;