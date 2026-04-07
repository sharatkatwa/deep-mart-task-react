import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ProductDetails from "../pages/ProductDetails";
import ProtectedMain from "./ProtectedMain";
import ProtectedAuth from "./ProtectedAuth";
import { getAllProducts, getSingleProduct } from "../apis/ProductApis";

const AppRoutes = () => {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedMain />,
      children: [
        {
          path: "",
          element: (
              <MainLayout />
          ),
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
              loader: async () => {
                let data = await getAllProducts();
                return data;
              },
              hydrateFallbackElement: (
                <h1 className="text-5xl font-syne text-primary font-bold">Loading products...</h1>
              ),
              path: "Products",
              element: <Products />,
            },
            {
              loader: async ({ params }) => {
                let data = await getSingleProduct(params.id);
                return data;
              },
              hydrateFallbackElement: (
                <h1 className="text-5xl font-syne text-primary font-bold">Loading Product Details...</h1>
              ),
              path: "Products/:id",
              element: <ProductDetails />,
            },
          ],
        },
      ],
    },

    {
      path: "/Auth",
      element: <ProtectedAuth />,
      children: [
        {
          path: "",
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
      ],
    },
  ]);

  return <RouterProvider router={allRoutes} />;
};

export default AppRoutes;
