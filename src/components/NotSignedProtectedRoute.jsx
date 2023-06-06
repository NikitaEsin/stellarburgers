import { Navigate } from 'react-router-dom';

export const NotSignedProtectedRoute = ({ element }) => {
  return localStorage.refreshToken ? element : <Navigate to="/login" replace />;
};