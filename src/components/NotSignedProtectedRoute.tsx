import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const NotSignedProtectedRoute = ({ element }: any) => {
  const {isLoggedIn} = useSelector(
    (state: any) => state.tokenReducer
  );
  const location = useLocation
  return isLoggedIn ? element : <Navigate to="/login" state={{ from: location}}/>;
};