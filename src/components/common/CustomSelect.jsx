import { useState, useRef, useEffect } from 'react';

import PropTypes from 'prop-types';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

const CustomSelect = ({ values, defaultValue = '', foo, color = 'yellow' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const selectRef = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSelectList = () => setIsOpen(prev => !prev);

  const handleSelectItem = item => {
    setCurrentValue(item);
    setIsOpen(false);
    foo && foo(item);
  };

  return (
    <div className="relative inline-block text-lg" ref={selectRef}>
      <button
        type="button"
        onClick={toggleSelectList}
        className={clsx(
          `flex min-w-36 items-center justify-between gap-2 rounded-md 
          border bg-dark p-2 uppercase shadow-sm duration-500 ease-in-out`,
          {
            'hover:border-accent hover:shadow-accent': color === 'yellow',
            'hover:border-accent_green hover:shadow-accent_green':
              color === 'green',
            'hover:border-accent_red hover:shadow-accent_red': color === 'red',
          }
        )}
      >
        {currentValue}
        <ChevronDownIcon
          className={`size-6 ${isOpen ? 'rotate-180' : ''} duration-500 ease-in-out`}
        />
      </button>

      {isOpen && (
        <ul
          className="absolute left-0 
          flex w-full flex-col 
        divide-y rounded-md border bg-dark uppercase shadow-md"
        >
          {values?.map((value, idx) => (
            <li
              key={idx}
              onClick={() => handleSelectItem(value)}
              className={`cursor-pointer p-2 first-of-type:rounded-t-md 
              last-of-type:rounded-b-md hover:bg-semi-dark
              ${value === currentValue ? 'bg-semi-dark' : 'bg-dark'} `}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;

CustomSelect.propTypes = {
  values: PropTypes.array,
  defaultValue: PropTypes.string,
  foo: PropTypes.func,
  color: PropTypes.string,
};
