import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

const FullBgVideo = ({ children }) => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    // Определяем ширину экрана и загружаем видео только если >= 1200px
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setShouldLoadVideo(true);
      } else {
        setShouldLoadVideo(false);
      }
    };

    // Проверка при загрузке страницы
    handleResize();

    // Слушаем изменения размера окна
    window.addEventListener('resize', handleResize);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 z-10 bg-black w-full h-full opacity-50" />
      {shouldLoadVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video/game-1.mp4"
          autoPlay
          loop
          muted
        />
      )}
      <div className="relative z-20 h-full border-white border">{children}</div>
    </div>
  );
};

export default FullBgVideo;

FullBgVideo.propTypes = {
  children: PropTypes.node,
};
