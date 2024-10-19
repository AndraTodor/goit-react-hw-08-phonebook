import { NavLink } from 'react-router-dom';
export const AuthNav = () => {
  return (
    <div className="flex space-x-4">
      <NavLink className="text-white hover:text-blue-300" to="/register">
        Register
      </NavLink>
      <NavLink className="text-white hover:text-blue-300" to="/login">
        Log In
      </NavLink>
    </div>
  );
};
