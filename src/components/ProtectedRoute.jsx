import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

export function ProtectedRoute() {
  const { estaLogueado } = useUser();
  const location = useLocation();

  if (!estaLogueado) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
