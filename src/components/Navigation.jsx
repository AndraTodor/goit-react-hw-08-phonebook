import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <nav className="flex space-x-4 text-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-500 transition'
            : 'text-white hover:text-blue-300 transition'
        }
      >
        Home Page
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 transition'
              : 'text-white hover:text-blue-300 transition'
          }
        >
          Contacts Page
        </NavLink>
      )}
    </nav>
  );
};
