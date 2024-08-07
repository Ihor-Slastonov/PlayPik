import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import FilterBar from '../FilterBar/FilterBar';
import PickGame from '../PickGame/PickGame';
import Chat from '../Chat/Chat';
import ReloadDataBtn from '../ReloadDataBtn/ReloadDataBtn';

const SharedLayout = () => {
  const location = useLocation();

  const linkText = location.pathname !== '/' ? 'Home' : 'Tournament';
  return (
    <>
      <header className="py-5 sticky top-0 z-10 bg-dark border-b shadow-md shadow-semi-dark">
        <div className="container">
          <div className="flex flex-col gap-4 relative">
            <p
              className="absolute top-0 left-0 flex items-center gap-2
            "
            >
              mode:
              <Link
                to={location.pathname === '/' ? '/tournament' : '/'}
                className="p-2 rounded-lg border border-accent 
                hover:text-accent hover:border-accent_green duration-500 ease-in-out"
              >
                {linkText}
              </Link>
            </p>

            <PickGame />
            {location.pathname === '/' && <FilterBar />}
          </div>
        </div>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <div
        className="flex flex-col gap-2
      fixed bottom-[40px] right-[80px]"
      >
        <Chat />
        <ReloadDataBtn />
      </div>
    </>
  );
};

export default SharedLayout;
