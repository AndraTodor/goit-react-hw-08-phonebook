import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/operations';
import { selectAuthUser } from '../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div className="flex items-center space-x-4">
      <p className="text-white">Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
