import { useState } from 'react';

import { ArrowPathIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

const ReloadDataBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        'grid place-content-center size-10 rounded-md border absolute bottom-[40px] right-[80px] duration-500 ease-in-out',
        isHovered
          ? 'border-accent_green opacity-100'
          : 'border-semi-dark opacity-50'
      )}
    >
      <ArrowPathIcon
        className={clsx(
          'size-6  duration-500 ease-in-out',
          isHovered
            ? 'opacity-100 text-accent animate-spin'
            : 'opacity-50 text-semi-dark '
        )}
      />
      <div className="w-full absolute -bottom-[8px]">
        <div
          className={clsx(
            'w-full h-1 relative bg-accent_green blur-sm duration-500 ease-in-out',
            isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'
          )}
        />
        <div
          className={clsx(
            'absolute top-0 left-1/2 -translate-x-1/2 blur-sm w-[50%] h-1 bg-accent',
            isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'
          )}
        />
      </div>
    </button>
  );
};

export default ReloadDataBtn;
