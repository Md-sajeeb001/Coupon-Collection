import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Brands from "../Pages/Brands/Brands";
import BrandDetails from "../Components/BrandDetails/BrandDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import MyProfile from "../Components/MyProfile/MyProfile";
import UpDateProfile from "../Pages/upDateProfile/upDateProfile";

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
        element: (
          <PrivetRoute>
            <BrandDetails></BrandDetails>
          </PrivetRoute>
        ),
        loader: () => fetch(`/Brand.json`),
      },
      {
        path: "/brand/:id",
        element: (
          <PrivetRoute>
            <BrandDetails></BrandDetails>
          </PrivetRoute>
        ),
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
      {
        path: "/myprofile",
        element: (
          <PrivetRoute>
            <MyProfile></MyProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/update",
        element: (
          <PrivetRoute>
            <UpDateProfile></UpDateProfile>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
