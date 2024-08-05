import PropTypes from 'prop-types';

import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const ChatBtn = ({ foo }) => {
  return (
    <button
      type="button"
      className="grid place-content-center size-10 rounded-md 
        border border-semi-dark opacity-50 
        duration-500 ease-in-out
        hover:border-accent_green group"
      onClick={foo}
    >
      <ChatBubbleLeftRightIcon
        className="size-6 text-semi-dark opacity-50 
        group-hover:opacity-100 group-hover:text-accent group-hover:animate-pulse
        duration-500 ease-in-out"
      />
    </button>
  );
};

export default ChatBtn;

ChatBtn.propTypes = {
  foo: PropTypes.func,
};
