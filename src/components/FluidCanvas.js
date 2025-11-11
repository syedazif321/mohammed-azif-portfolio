// src/components/FluidCanvas.js
import React, { useEffect } from 'react';
import { initFluid } from '../script.js'; // Import the function

const FluidCanvas = () => {
  // This runs ONE time after the component mounts
  useEffect(() => {
    // Now we call your script's function
    initFluid();
  }, []); // The empty array [] means "run only once"

  // Your script.js will look for this ID
  return <canvas id="fluid-canvas"></canvas>;
};

export default FluidCanvas;