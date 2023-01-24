import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import FriendPage from '../pages/FriendPage';
import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';
import ProfilePage from '../pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    )
  },
  {
    path: '/',
    element: <PostPage />
  },
  {
    path: '/friend',
    element: <FriendPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
