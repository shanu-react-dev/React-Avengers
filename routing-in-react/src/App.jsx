import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Layout from "./Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from "./components/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about-me",
      element: <About />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  console.log(router);

  return <RouterProvider router={router} />;
};

export default App;
