import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Signup from "./forms/Signup";
import Login from "./forms/Login";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import PrivateRoute from "./logics/PrivateRoute";
import PublicRoute from "./logics/PublicRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          ),
        },
        {
          path: "/about",
          element: (
            <PrivateRoute>
              <About />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <PublicRoute>
          <Signup />
        </PublicRoute>
      ),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
