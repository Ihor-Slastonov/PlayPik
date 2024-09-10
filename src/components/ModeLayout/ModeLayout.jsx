import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const ModeLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-layout">
      <Sidebar />

      <div>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <div className="myContainer">
              <Outlet />
            </div>
          </main>
        </Suspense>
      </div>
    </div>
  );
};

export default ModeLayout;
