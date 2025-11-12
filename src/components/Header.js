import React, { useEffect, useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom'; 

const publicUrl = process.env.PUBLIC_URL;

const Header = () => {
  const location = useLocation(); 
  
  // State to control the visibility of the pop-up/modal
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);

  // Function to open the modal
  const handleAvatarClick = () => {
    setIsAvatarOpen(true); 
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsAvatarOpen(false); 
  };
  
  // Scroll logic for hash navigation and scrolling to top on base route
  useEffect(() => {
    // 1. Check if there is a hash (e.g., #me) in the URL
    if (location.hash) {
      const targetId = location.hash.substring(1); 
      const element = document.getElementById(targetId);
      
      if (element) {
        // Scroll smoothly to the target element if found
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // 2. If we are on the base route OR if it's the very first load 
    //    and we need to aggressively clear the view:
    else if (location.pathname === '/') {
      // Force scroll to the top of the window
      window.scrollTo(0, 0);
    }
    
  }, [location.pathname, location.hash]); 
  
  // NOTE: A more aggressive approach for first load outside of the router:
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []); 
  // You could use the simple useEffect above if the router's initial state is causing problems, 
  // but it may conflict with saved scroll positions on refresh. The current implementation is usually best.

  // Helper function to handle section links
  const getNavLink = (sectionId, text, iconClass) => {
    const icon = <i className={iconClass}></i>;
    const content = <>{icon}<span>{text}</span></>;
    return <Link to={`/#${sectionId}`}>{content}</Link>;
  };

  return (
    <> 
      {/* Conditional Modal/Pop-up Rendering */}
      {isAvatarOpen && (
        // Click the overlay to close the modal
        <div className="avatar-modal-overlay" onClick={handleCloseModal}>
          {/* Prevent clicks on the content from closing the modal */}
          <div className="avatar-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={publicUrl + "/media/azif.png"} 
              alt="My Avatar Zoomed" 
              className="avatar-zoomed" 
            />
            <button className="modal-close-btn" onClick={handleCloseModal}>
                &times;
            </button>
          </div>
        </div>
      )}

      {/* The original Header content */}
      <div className="header-container">
        
        {/* Avatar image with click handler to open the modal */}
        <img 
          src={publicUrl + "/media/azif.png"} 
          alt="My Avatar" 
          className="avatar" 
          onClick={handleAvatarClick} 
          style={{ cursor: 'pointer' }} 
        />

        <header>
          <h1>Hey, I'm Mohammed Azif👋</h1>
          <h2>Robotics Engineer</h2>
        </header>

        <nav>
          {getNavLink('me', 'About Me', 'fa-solid fa-user')}
          <Link to="/projects">
            <i className="fa-solid fa-briefcase"></i>
            <span>Projects</span>
          </Link>
          {getNavLink('skills', 'Skills', 'fa-solid fa-laptop-code')}
          {getNavLink('contact', 'Contact', 'fa-solid fa-envelope')}
        </nav>

        <a href={publicUrl + "/Mohammed_azif_resume_.pdf"} className="btn-resume" download>
          <i className="fa-solid fa-download"></i>
          Download Resume
        </a>
      </div>
    </>
  );
};

export default Header;