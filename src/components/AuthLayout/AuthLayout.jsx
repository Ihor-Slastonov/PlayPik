/* eslint-disable react/no-unescaped-entities */
import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

import FullBgVideo from '../FullBgVideo/FullBgVideo';
import AuthLayoutNav from './AuthLayoutNav';

const AuthLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <FullBgVideo>
        <div
          className="bg-gradient-to-b from-black via-violet_deep to-violet_dark bg-opacity-80 
        w-11/12 h-fit p-4 shadow-2xl shadow-violet_deep"
        >
          <h1 className="font-bold text-2xl lg:text-3xl text-center mb-2">
            Welcome To PlayPik
          </h1>
          {isHomePage ? (
            <p className="antialiased tracking-wide mb-4">
              A world where choosing a game is no longer a dilemma! Here, you
              can easily add your favorite games, set filters, and let our
              unique PlayPik button decide your next gaming adventure. But
              that's just the beginning! Sign up to unlock the full experience:
              save your favorite games, leave comments, upload screenshots, and
              join the general chat with fellow gamers. And the best part?
              You'll gain access to the exclusive tournament page, where you can
              compete with friends and find out whose game will reign supreme.
              Ready to test your luck? Welcome to PlayPik!
            </p>
          ) : (
            <Suspense fallback={<div>Loading</div>}>
              <Outlet />
            </Suspense>
          )}

          <AuthLayoutNav />
        </div>
      </FullBgVideo>
    </>
  );
};

export default AuthLayout;
