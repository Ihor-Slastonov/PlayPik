import PropTypes from 'prop-types';

import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ChatContainer = ({ children, isOpen, toogle }) => {
  return (
    isOpen && (
      <div
        className="w-40 h-80 border rounded-md 
      absolute -top-[400px] right-10 bg-dark"
      >
        {children}
        <button
          type="button"
          className="absolute top-0 -right-8 size-8
        flex items-center justify-center border"
          onClick={toogle}
        >
          <ChevronUpIcon className="size-6" />
        </button>
      </div>
    )
  );
};

export default ChatContainer;

ChatContainer.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  toogle: PropTypes.func,
};
