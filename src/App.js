// src/App.js

// 1. We change 'BrowserRouter' to 'HashRouter' and give it an alias 'Router'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
    // 2. We use <Router> (which is our HashRouter) instead of <BrowserRouter>
    <Router>
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
    </Router> // 3. Make sure this closing tag matches
  );
}

export default App;