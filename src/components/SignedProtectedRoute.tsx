import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../Hooks/Hooks';

export const SignedProtectedRoute = ({ element }: any) => {
  const {isLoggedIn} = useAppSelector(
    (state) => state.tokenReducer
  );
  const location = useLocation()
  return isLoggedIn ? <Navigate to="/" state={{ from: location}}/> : element;
};