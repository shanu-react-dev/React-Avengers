import { Link, useNavigate } from "react-router-dom";

const Navlists = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("isLoggedIn");

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {!isAuth && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!isAuth && (
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        )}
        {isAuth && (
          <li>
            <button
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("userName");
                localStorage.removeItem("userImg");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navlists;
