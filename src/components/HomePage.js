// src/components/HomePage.js (Final and Resilient Tidio Integration)
import React from 'react'; 
import Header from './Header'; 

// CRITICAL: This function now uses a self-retrying loop to ensure the chat stays open.
const openTidioChat = () => {
    const promptSection = document.getElementById('ai-prompt-section');

    const activateChat = (attempt = 0) => {
        if (window.tidioChatApi) {
            
            // 1. Set display to true (makes the widget load/be visible)
            window.tidioChatApi.display(true); 
            
            // 2. Open the chat window (maximizes it)
            window.tidioChatApi.open(); 
            
            // 3. Hide the aesthetic prompt immediately
            if (promptSection) {
                promptSection.style.display = 'none'; 
                promptSection.style.visibility = 'hidden'; 
            }
        } else if (attempt < 5) {
            // 4. If the API is not loaded yet, wait a moment and try again.
            console.warn(`Tidio API not yet ready on click. Retrying (Attempt ${attempt + 1}).`);
            setTimeout(() => activateChat(attempt + 1), 200); 
        }
    };

    // Execute the activation logic
    activateChat();
};

const HomePage = () => {
    return (
        <main className="portfolio-container" id="home">
            <Header />

            {/* AI AGENT INTERACTIVE PROMPT SECTION - NOW CALLS TIDIO API */}
            <section 
                id="ai-prompt-section" 
                className="content-section interactive-prompt"
                onClick={openTidioChat} // Calls the function to open Tidio
                style={{ cursor: 'pointer' }}
            >
                <p className="ai-prompt-text">Ask me anything...</p>
                <div className="ai-prompt-arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </section>

            {/* ... (rest of your content sections) ... */}
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
                    <span className="skill-tag">C++</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Gazebo</span>
                    <span className="skill-tag">MoveIt 2</span>
                    <span className="skill-tag">URDF</span>
                    <span className="skill-tag">Nav2</span>
                    <span className="skill-tag">RViz</span>
                    <span className="skill-tag">OpenCV</span>
                    <span className="skill-tag">Docker</span>
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Linux</span>
                    <span className="skill-tag">Qt (for GUI)</span>
                    <span className="skill-tag">MATLAB/Simulink</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Javascript</span>
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