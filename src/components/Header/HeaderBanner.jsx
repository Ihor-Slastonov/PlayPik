import React from 'react';

export const HeaderBanner = () => {
  return (
    <div
      className='absolute left-0 top-0 h-[70px] w-full
    bg-[url("/bgMobile.webp")] bg-cover bg-center'
    >
      <div
        className="absolute left-0 top-0 z-[1] h-[70px] w-full
      bg-dark_deep opacity-80"
      />
    </div>
  );
};
