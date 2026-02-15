import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Function to hide loader with simple fade
const hideLoader = () => {
  const loader = document.getElementById('loader');
  const root = document.getElementById('root');
  
  if (loader && root) {
    // Start home page transition immediately
    root.classList.add('visible');
    
    // Fade out loader
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.8s ease-out';
    
    // Remove loader from DOM after fade
    setTimeout(() => {
      loader.style.display = 'none';
    }, 800);
  }
};

// Check if animation is already done
if ((window as any).loaderAnimationComplete) {
  hideLoader();
} else {
  // Wait for animation to finish
  window.addEventListener('loaderAnimationComplete', hideLoader);
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
