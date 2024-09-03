import { NavLink } from 'react-router-dom';
import { useAuth } from '../../utils/hooks/useAuth';
import { selectUser } from '../../zustand/auth/authSelectors';

const AuthLayoutNav = () => {
  const { isLoggedIn } = useAuth();
  const user = selectUser();
  return (
    <nav className="grid grid-cols-2 gap-x-4 gap-y-3">
      {!isLoggedIn ? (
        <>
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
          <NavLink
            to="/mode"
            className="btn_outline_red w-full col-span-2"
            replace
          >
            Skip
          </NavLink>
        </>
      ) : (
        <NavLink
          to="/mode"
          className="btn_outline_green w-full col-span-2"
          replace
        >
          Welcome {user.name}
        </NavLink>
      )}
    </nav>
  );
};

export default AuthLayoutNav;
