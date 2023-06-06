import { Navigate } from 'react-router-dom';

export const SignedProtectedRoute = ({ element }) => {
  return localStorage.refreshToken ? <Navigate to="/" replace /> : element;
};