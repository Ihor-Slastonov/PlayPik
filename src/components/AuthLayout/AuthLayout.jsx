import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import FullBgVideo from '../FullBgVideo/FullBgVideo';
import AuthLayoutNav from './AuthLayoutNav';
import AnimatedText from './AnimatedText';
import AuthLayout3dScene from './AuthLayout3dScene';

const AuthLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <main>
      <section className="relative">
        <AuthLayout3dScene />
        <FullBgVideo>
          <div
            className="bg-gradient-to-b 
          from-black_transparent 
          via-violet_deep
          to-violet_dark_transparent 
          shadow-violet_deep shadow-2xl 
          w-11/12 h-fit  p-4 xl:w-[600px]"
          >
            <h1 className="font-bold text-2xl xl:text-3xl text-center mb-2 xl:mb-4">
              Welcome To PlayPik
            </h1>

            <div className="mb-16 xl:mb-24 min-w-[320px]  min-h-[200px] mx-auto xl:w-[500px] duration-500 ease-in-out">
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
      </section>
    </main>
  );
};

export default AuthLayout;
