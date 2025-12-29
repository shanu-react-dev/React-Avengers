import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Signup from "./forms/Signup";
import Login from "./forms/Login";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
