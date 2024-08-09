import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import FilterBar from '../FilterBar/FilterBar';
import PickGame from '../PickGame/PickGame';
import Chat from '../Chat/Chat';
import ReloadDataBtn from '../ReloadDataBtn/ReloadDataBtn';
import NavPanel from '../NavPanel/NavPanel';
import PickGameTournament from '../PickGame/PickGameTournament/PickGameTournament';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const SharedLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const togglePath = location.pathname === '/' ? '/tournament' : '/';

  return (
    <>
      <header className="py-5 sticky top-0 z-10 bg-dark border-b shadow-md shadow-semi-dark">
        <div className="container">
          <div
            className={`flex flex-col gap-4 relative ${isHomePage ? 'min-h-[160px]' : 'min-h-[120px]'}`}
          >
            <Link
              to={togglePath}
              className="size-16 p-1 flex center absolute top-2 left-1/3 group"
            >
              <ChevronLeftIcon className="size-14 group-hover:text-accent duration-500 ease-in-out" />
            </Link>
            <Link
              to={togglePath}
              className="size-16 p-1 flex center absolute top-2 right-1/3 group"
            >
              <ChevronRightIcon className="size-14 group-hover:text-accent_green duration-500 ease-in-out" />
            </Link>
            <NavPanel />
            <AnimatePresence>
              {isHomePage ? (
                <motion.div
                  key="pickGame"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <PickGame />
                </motion.div>
              ) : (
                <motion.div
                  key="pickGameTournament"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <PickGameTournament />
                </motion.div>
              )}
            </AnimatePresence>
            {isHomePage && <FilterBar />}
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
