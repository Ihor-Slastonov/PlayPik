import PropTypes from 'prop-types';

import { XMarkIcon } from '@heroicons/react/24/outline';

const ChatContainer = ({ children, isOpen, toogle }) => {
  return (
    isOpen && (
      <div
        className="w-[500px] h-[400px] border-2 border-accent rounded-md 
      absolute -top-[400px] right-10 bg-dark shadow-md shadow-accent"
      >
        {children}
        <button
          type="button"
          className="absolute top-0 -right-10 size-8
        flex items-center justify-center border border-accent_red bg-dark"
          onClick={toogle}
        >
          <XMarkIcon className="size-6 text-accent_red" />
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
