import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import FilterBar from '../FilterBar/FilterBar';
import PickGame from '../PickGame/PickGame';
import Chat from '../Chat/Chat';
import ReloadDataBtn from '../ReloadDataBtn/ReloadDataBtn';

const SharedLayout = () => {
  return (
    <>
      <header className="py-5 sticky top-0 z-10 bg-dark border-b shadow-md shadow-semi-dark">
        <div className="container">
          <div className="flex flex-col gap-4">
            <PickGame />
            <FilterBar />
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
