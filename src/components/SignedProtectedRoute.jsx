import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SignedProtectedRoute = ({ element }) => {
  const {isLoggedIn} = useSelector(
    (state) => state.tokenReducer
  );
  const location = useLocation
  return isLoggedIn ? <Navigate to="/login" state={{ from: location}}/> : element;
};