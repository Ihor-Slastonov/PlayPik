import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

const FullBgVideo = ({ children }) => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setShouldLoadVideo(true);
      } else {
        setShouldLoadVideo(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 z-10 bg-black w-full h-full opacity-50" />
      {shouldLoadVideo ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video/game-1.mp4"
          autoPlay
          loop
          muted
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full
        bg-[url('/bgMobile.webp')]  bg-repeat bg-cover bg-center"
        />
      )}
      <div
        className="relative top-0 left-0 pt-8 flex justify-center
       z-20 h-full"
      >
        {children}
      </div>
    </div>
  );
};

export default FullBgVideo;

FullBgVideo.propTypes = {
  children: PropTypes.node,
};
