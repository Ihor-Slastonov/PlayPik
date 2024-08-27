import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const ModeLayout = () => {
  return (
    <>
      <div>ModeLayout</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ModeLayout;
