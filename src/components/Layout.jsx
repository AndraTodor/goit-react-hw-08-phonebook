import { Suspense } from 'react';
import { AppBar } from './AppBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
