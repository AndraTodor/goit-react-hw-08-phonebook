import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../redux/auth/selectors';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
