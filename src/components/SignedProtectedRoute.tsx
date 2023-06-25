import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SignedProtectedRoute = ({ element }: any) => {
  const {isLoggedIn} = useSelector(
    (state: any) => state.tokenReducer
  );
  const location = useLocation()
  return isLoggedIn ? <Navigate to="/" state={{ from: location}}/> : element;
};