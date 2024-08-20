import { NavLink } from 'react-router-dom';

const AuthLayoutNav = () => {
  return (
    <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? 'btn_inline_green' : 'btn_outline_green'
        }
      >
        Sign In
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? 'btn_inline_yellow' : 'btn_outline_yellow'
        }
      >
        Sign Up
      </NavLink>
      <NavLink to="/mode" className="btn_outline_red w-full col-span-2">
        Skip
      </NavLink>
    </nav>
  );
};

export default AuthLayoutNav;
