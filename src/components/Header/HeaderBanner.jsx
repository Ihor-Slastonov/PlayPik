const HeaderBanner = () => {
  return (
    <div
      className='absolute left-0 top-0 h-[100px] w-full
    bg-[url("/bgMobile.webp")] bg-cover bg-center xl:h-[200px]'
    >
      <div
        className="absolute left-0 top-0 z-[1] h-[100px] w-full
      bg-dark_deep opacity-80 xl:h-[200px]"
      />
    </div>
  );
};

export default HeaderBanner;
