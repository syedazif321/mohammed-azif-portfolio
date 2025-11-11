import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal pages

const HomePage = () => {
  return (
    <main className="portfolio-container" id="home">
      {/* Paths are from the 'public' folder */}
      <img src="/media/azif.png" alt="My Avatar" className="avatar" />

      <header>
        <h1>Hey, I'm Mohammed Azif👋</h1>
        <h2>Robotics Engineer</h2>
      </header>

      <nav>
        {/* Use <a> for anchor links on the same page */}
        <a href="#me">
          <i className="fa-solid fa-user"></i>
          <span>About Me</span>
        </a>
        {/* Use <Link> to go to a different page */}
        <Link to="/projects">
          <i className="fa-solid fa-briefcase"></i>
          <span>Projects</span>
        </Link>
        <a href="#skills">
          <i className="fa-solid fa-laptop-code"></i>
          <span>Skills</span>
        </a>
        <a href="#contact">
          <i className="fa-solid fa-envelope"></i>
          <span>Contact</span>
        </a>
      </nav>

      <a href="/Mohammed_azif_resume_.pdf" className="btn-resume" download>
        <i className="fa-solid fa-download"></i>
        Download Resume
      </a>

      {/* Your sections from index.html, no changes needed */}
      <section id="me" className="content-section">
        <h2>About Me</h2>
        <p>
          I'm a Robotics Engineer specializing in designing, simulating, and deploying autonomous systems. With a B.Tech in Mechatronics Engineering, I have a strong foundation in both the hardware and software that bring robots to life.
        </p>
        <p>
          My core expertise lies in the ROS ecosystem (ROS 1 & ROS 2), where I leverage C++ and Python to build robust applications. I'm experienced in creating realistic simulations in Gazebo, developing perception pipelines with OpenCV, and implementing complex motion planning using MoveIt 2. I thrive on solving challenging problems, from designing URDF models to containerizing applications with Docker for seamless deployment.
        </p>
      </section>

      <section id="skills" className="content-section">
        <h2>My Tech Stack</h2>
        <div className="skills-grid">
            <span className="skill-tag">ROS 2 (Humble)</span>
            <span className="skill-tag">ROS 1</span>
            <span className="skill-tag">C++</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Gazebo</span>
            <span className="skill-tag">MoveIt 2</span>
            <span className="skill-tag">URDF</span>
            <span className="skill-tag">RViz</span>
            <span className="skill-tag">OpenCV</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">Git</span>
            <span className="skill-tag">Linux</span>
            <span className="skill-tag">Qt (for GUI)</span>
            <span className="skill-tag">MATLAB/Simulink</span>
            <span className="skill-tag">Shell Script</span>
        </div>
      </section>

      <section id="contact" className="content-section">
        <h2>Get In Touch</h2>
        <div className="contact-links">
            <a href="mailto:syedazif321@gmail.com" className="contact-icon" title="Email">
                <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://linkedin.com/in/Mohammed-azif-s" target="_blank" rel="noopener noreferrer" className="contact-icon" title="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/syedazif321" target="_blank" rel="noopener noreferrer" className="contact-icon" title="GitHub">
                <i className="fa-brands fa-github"></i>
            </a>
        </div>
      </section>
    </main>
  );
};

export default HomePage;