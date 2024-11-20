import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Brands from "../Components/Brands/Brands";
import BrandDetails from "../Components/BrandDetails/BrandDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Brand.json"),
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("/Brand.json"),
      },
      {
        path: "/brandDetails/:id",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch(`/Brand.json`),
      },
      {
        path: "/brand/:id",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch(`/Brand.json`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
