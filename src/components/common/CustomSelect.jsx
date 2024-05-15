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
          `flex items-center gap-2 justify-between min-w-36 p-2 
          border rounded-md shadow-sm bg-dark uppercase duration-500 ease-in-out`,
          {
            'hover:border-accent hover:shadow-accent': color === 'yellow',
            'hover:border-accent_green hover:shadow-accent_green':
              color === 'green',
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
          flex flex-col w-full 
        bg-dark border rounded-md shadow-md uppercase divide-y"
        >
          {values?.map((value, idx) => (
            <li
              key={idx}
              onClick={() => handleSelectItem(value)}
              className={`cursor-pointer p-2 hover:bg-semi-dark 
              first-of-type:rounded-t-md last-of-type:rounded-b-md
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
