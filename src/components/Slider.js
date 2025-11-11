// src/components/Slider.js
import React, { useState, useEffect, useCallback } from 'react';
import ImageModal from './ImageModal'; // Import our modal

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [isAutoplay, setIsAutoplay] = useState(true);

  // --- 1. DEFINE FUNCTIONS FIRST ---

  // We define nextSlide here, wrapped in useCallback
  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // --- 2. USE FUNCTIONS IN useEffect ---
  
  // This useEffect for autoplay now safely uses nextSlide
  useEffect(() => {
    if (!isAutoplay) return;
    const autoPlayInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlayInterval);
  }, [currentIndex, isAutoplay, nextSlide]); // nextSlide is now defined

    
  // --- All other control functions ---
  const pauseAutoplay = () => setIsAutoplay(false);
  const resetAutoplay = () => setIsAutoplay(true);
  
  const handleNextClick = () => {
    nextSlide(); // This is safe, nextSlide is defined above
    pauseAutoplay();
  };
  
  const handlePrevClick = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    pauseAutoplay();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    pauseAutoplay();
  };

  // --- Modal functions ---
  const openModal = (src) => {
    pauseAutoplay();
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageSrc('');
    resetAutoplay();
  };

  if (!images || images.length === 0) return null;

  // --- 3. RETURN THE JSX (HTML-like code) ---
  return (
    <>
      <div 
        className="slider-container" 
        id="project-slider"
        onMouseEnter={pauseAutoplay} 
        onMouseLeave={resetAutoplay}
      >
        <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div className="slide" key={index} onClick={() => openModal(image.src)} style={{cursor: 'pointer'}}>
              <img src={image.src} alt={image.alt} className={image.class || ''} />
            </div>
          ))}
        </div>

        {/* Note: I fixed your prev button to call handlePrevClick */}
        <button className="slider-arrow prev" id="prevBtn" onClick={handlePrevClick}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="slider-arrow next" id="nextBtn" onClick={handleNextClick}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        <div className="dots-container" id="dotsContainer">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* This is how you show/hide the modal in React */}
      {isModalOpen && <ImageModal src={modalImageSrc} onClose={closeModal} />}
    </>
  );
};

export default Slider;