/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../AuthorizationPage/Login";
import Register from "../AuthorizationPage/Register";
import Main from "../../Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllToys from "../AllToys/AllToys";
import AddAToy from "../AddAToy/AddAToy";
import MyToys from "../MyToys/MyToys";
import UpdateMyToy from "../MyToys/UpdateMyToy";
import Blog from "../Blog/Blog";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>
      },
      {
        path: "add-a-toy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: "my-toys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "update/:id",
        element: <PrivateRoute><UpdateMyToy></UpdateMyToy></PrivateRoute> ,
        // loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
        loader: ({params}) => fetch(`https://toy-box-server-site.vercel.app/update/${params.id}`)
      }
    ],
  },
]);

export default router;
