import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <span>Welcome, {user.name}!</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <span>Please log in</span>
      )}
    </div>
  );
};

export default UserMenu;
