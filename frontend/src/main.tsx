import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RoomsListPage from './pages/RoomsListPage';

const router = createBrowserRouter([
  {
    path: '/rooms',
    element: <RoomsListPage />
  },
  {
    path: '/',
    element: <Navigate to="/rooms" /> 
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
