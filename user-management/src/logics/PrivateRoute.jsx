import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isLoggedIn");
  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
