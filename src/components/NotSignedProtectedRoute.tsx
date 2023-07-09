import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../Hooks/Hooks';


export const NotSignedProtectedRoute = ({ element }: any) => {
  const {isLoggedIn} = useAppSelector(
    (state) => state.tokenReducer
  );
  const location = useLocation
  return isLoggedIn ? element : <Navigate to="/login" state={{ from: location}}/>;
};