import React from 'react';
import Button from '@src/Components/button';

const ImageViewer = ({ url }) => {
  const handleFullscreen = () => {
    const element = document.getElementById(url); // Get the div containing the image

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      // Chrome, Safari
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      // IE/Edge
      element.msRequestFullscreen();
    }
  };

  return (
    <div className="relative w-[300px] h-[600px] md:w-[450px] md:h-[600px]">
      <img
        id={url}
        alt="resume"
        className="w-full h-full object-contain"
        src={url}
      />

      <div
        className={
          'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Button onClick={handleFullscreen}>Full Screen</Button>
      </div>
    </div>
  );
};

export default ImageViewer;
