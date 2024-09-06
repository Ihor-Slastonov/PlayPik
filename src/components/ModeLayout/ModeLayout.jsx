import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const ModeLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <div className="myContainer">
            <Outlet />
          </div>
        </main>
      </Suspense>
    </>
  );
};

export default ModeLayout;
