import {
  Cog6ToothIcon,
  EnvelopeIcon,
  ArrowLeftStartOnRectangleIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

export const LogoutUserBtn = () => {
  return (
    <button
      type="button"
      className="center absolute right-24 top-4 flex size-14 text-semi-dark duration-500 
       ease-in-out hover:text-accent_red focus:text-accent_red
       xl:left-4 xl:top-4 xl:size-10"
    >
      <ArrowLeftStartOnRectangleIcon className="size-10" />
    </button>
  );
};

export const NotifyUserBtn = () => {
  return (
    <button
      type="button"
      className="center flex size-14 text-semi-dark 
      transition-colors duration-500 ease-in-out 
      hover:text-accent_green focus:text-accent_green xl:size-10"
    >
      <EnvelopeIcon className="size-10" />
    </button>
  );
};

export const SettingsUserBtn = () => {
  return (
    <button
      type="button"
      className="center flex size-14 text-semi-dark transition-colors
    duration-500 ease-in-out hover:text-accent focus:text-accent xl:size-10"
    >
      <Cog6ToothIcon className="size-10" />
    </button>
  );
};

export const AdminUserBtn = () => {
  return (
    <button
      type="button"
      className="center flex size-14 text-semi-dark transition-colors
    duration-500 ease-in-out hover:text-accent focus:text-accent xl:mt-6 xl:size-10"
    >
      <UserIcon className="size-10" />
    </button>
  );
};
