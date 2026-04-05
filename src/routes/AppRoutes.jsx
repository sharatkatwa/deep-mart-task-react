import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from '../pages/About'
import Products from "../pages/Products";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ProductDetails from "../pages/ProductDetails";

const AppRoutes = () => {
  const allRoutes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Products",
          element: <Products />,
        },
        {
          path: "Products/:id",
          element: <ProductDetails />,
        },
      ],
    },
    {
      path: "Auth",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
        {
          path: "Signup",
          element: <Signup />,
        },
      ],
    },
  ]);
  
  return <RouterProvider router={allRoutes} />;
};

export default AppRoutes;
