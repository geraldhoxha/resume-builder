import { Route, RouteProps, Navigate } from 'react-router-dom';
import { useUser } from '../../tools/Context';


const PrivateRoute: React.FC<RouteProps> = ({ element, ...rest }: RouteProps) => {
  const context = useUser();

  return (
    <Route
      {...rest}
      element={
        context?.user
          ? element
          : <Navigate to="/login" state={{ from: rest.path }} replace />
      }
    />
  );
};

export default PrivateRoute;
