import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../../tools/Context';


export const PrivateRoute: React.FC = () => {
  const context = useUser();
  if (context?.user === undefined) {
    return <Navigate to='/login' replace />
  }
  return <Outlet />
};

export default PrivateRoute;
