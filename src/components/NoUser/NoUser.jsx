import { Link } from 'react-router-dom';

const NoUser = () => {
  return (
    <div
      className="center flex h-full w-full
           flex-col gap-1"
    >
      <Link to="/login" className="btn_outline_green">
        Sign In
      </Link>
      <p>or</p>
      <Link to="/register" className="btn_outline_yellow">
        Sign Up
      </Link>
    </div>
  );
};

export default NoUser;
