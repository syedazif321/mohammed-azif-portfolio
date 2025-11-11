// src/App.js
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
// Import our global stylesheet
import './style.css'; 

// Import all our components
import FluidCanvas from './components/FluidCanvas';
import HomePage from './components/HomePage';
import ProjectsListPage from './components/ProjectsListPage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      {/* FluidCanvas is outside <Routes>, so it shows on ALL pages */}
      <FluidCanvas />
      
      <Routes>
        {/* Route 1: The Home Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route 2: The Project List Page */}
        <Route path="/projects" element={<ProjectsListPage />} />
        
        {/* Route 3: The Dynamic Project Page */}
        {/* The ":id" part is a variable that matches our projectData.js */}
        <Route path="/project/:id" element={<ProjectPage />} />

        {/* Fallback route for 404 Not Found */}
        <Route path="*" element={
          <main className="portfolio-container page-container">
            <h2>404: Page Not Found</h2>
            <Link to="/" className="back-link">Go Home</Link>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;