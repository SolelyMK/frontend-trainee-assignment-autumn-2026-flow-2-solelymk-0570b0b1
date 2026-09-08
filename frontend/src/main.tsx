import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RoomsListPage from './pages/RoomsListPage';
import ErrorPage from './pages/ErrorPage';
import RoomDetailsPage from './pages/RoomDetailsPage';

const router = createBrowserRouter([
  {
    path: '/rooms',
    element: <RoomsListPage />,
  },
  {
    path: '/rooms/:roomId',
    element: <RoomDetailsPage />
  },
  {
    path: '/',
    element: <Navigate to="/rooms" />,
    errorElement: <ErrorPage />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
