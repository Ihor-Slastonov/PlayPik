/* eslint-disable react/no-unescaped-entities */
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import FullBgVideo from '../FullBgVideo/FullBgVideo';
import AuthLayoutNav from './AuthLayoutNav';
import AnimatedText from './AnimatedText';

const AuthLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <FullBgVideo>
        <div
          className="bg-gradient-to-b 
          from-black_transparent 
          via-violet_deep
          to-violet_dark_transparent 
          shadow-violet_deep shadow-2xl 
          w-11/12 h-fit p-4"
        >
          <h1 className="font-bold text-2xl lg:text-3xl text-center mb-2">
            Welcome To PlayPik
          </h1>

          <div className="mb-4 w-[320px] h-[360px]">
            {isHomePage ? (
              <AnimatedText />
            ) : (
              <Suspense fallback={<div>Loading</div>}>
                <Outlet />
              </Suspense>
            )}
          </div>

          <AuthLayoutNav />
        </div>
      </FullBgVideo>
    </>
  );
};

export default AuthLayout;
