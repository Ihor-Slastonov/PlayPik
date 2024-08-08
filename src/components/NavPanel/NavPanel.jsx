import { Link, useLocation } from 'react-router-dom';

const NavPanel = () => {
  const location = useLocation();

  const linkText = location.pathname === '/' ? 'Classic' : 'Tournament';

  return (
    <div className="w-full absolute top-0 left-0 flex items-center justify-between">
      <nav
        className="flex items-center gap-2
            "
      >
        mode:
        <Link
          to={location.pathname === '/' ? '/tournament' : '/'}
          className="p-2 rounded-lg border border-accent 
                hover:text-accent hover:border-accent_green duration-500 ease-in-out"
        >
          {linkText}
        </Link>
      </nav>

      <p className="flex items-center gap-2">
        last game: <span>Outlast</span>
      </p>
    </div>
  );
};

export default NavPanel;
