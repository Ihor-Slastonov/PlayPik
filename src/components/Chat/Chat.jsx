import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Chat = () => {
  return (
    <>
      <button
        type="button"
        className="grid place-content-center size-10 rounded-md 
        border border-semi-dark opacity-50 
        duration-500 ease-in-out
        hover:border-accent group"
      >
        <ChatBubbleLeftRightIcon
          className="size-6 text-semi-dark opacity-50 
        group-hover:opacity-100 group-hover:text-accent_green group-hover:animate-pulse
        duration-500 ease-in-out"
        />
      </button>
    </>
  );
};

export default Chat;
