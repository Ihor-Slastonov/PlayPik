import PropTypes from 'prop-types';

import { XMarkIcon } from '@heroicons/react/24/outline';

const ChatContainer = ({ children, isOpen, toogle }) => {
  return (
    isOpen && (
      <div
        className="w-[300px] h-[400px] border rounded-md 
      absolute -top-[400px] right-10 bg-dark"
      >
        {children}
        <button
          type="button"
          className="absolute top-0 -right-8 size-8
        flex items-center justify-center border"
          onClick={toogle}
        >
          <XMarkIcon className="size-6" />
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
