import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';// outlet is a package for send a children to go that  children  to automaticalaly they navigate to profile if not then they navigate to signin 

export default function PrivateRoute() {
  const { currentUser } = useSelector((state) => state.user); // this is came from redux 
  return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
}
