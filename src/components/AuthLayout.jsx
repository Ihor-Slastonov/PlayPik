import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import FullBgVideo from './FullBgVideo/FullBgVideo';

const AuthLayout = () => {
  return (
    <>
      <FullBgVideo>
        
      </FullBgVideo>
      <Suspense fallback={<div>Loading</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AuthLayout;
