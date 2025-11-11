// src/components/ImageModal.js
import React from 'react';
// 1. Import the components from the library you installed
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ImageModal = ({ src, onClose }) => {
  // This function closes the modal if you click the dark background
  const handleOverlayClick = (e) => {
    if (e.target.id === 'imageModal') {
      onClose();
    }
  };

  return (
    <div 
      id="imageModal" 
      className="modal-overlay" 
      style={{ display: 'flex' }} 
      onClick={handleOverlayClick}
    >
      <span id="modalClose" className="modal-close" onClick={onClose}>&times;</span>
      
      {/* 2. Wrap your image with the library's components */}
      <TransformWrapper
        initialScale={1}
        minScale={1}
        maxScale={5} // You can adjust this max zoom level
      >
        <TransformComponent
          // These styles help the image center and fit correctly inside the modal
          wrapperStyle={{ width: '100%', height: '100%' }}
          contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img 
            id="modalImage" 
            className="modal-content" 
            src={src} 
            alt="Modal" 
            // These styles ensure the image fits well before zooming
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ImageModal;