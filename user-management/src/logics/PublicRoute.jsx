import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isLoggedIn");
  return isAuth ? <Navigate to="/" /> : children;
};

export default PublicRoute;
