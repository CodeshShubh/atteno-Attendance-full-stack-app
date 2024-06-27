// ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isDriverLogin, children, redirectTo = '/' }) => {

  if (isDriverLogin=false) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
