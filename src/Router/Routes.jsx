import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import PasswordValidation from "../Layout/PasswordValidation";
import Register from "../Pages/Shared/Register/Register";
import ErrorPage from "../Pages/Shared/404-Page/ErrorPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
      ]
    },
    {
      path: '/',
      element: <PasswordValidation/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>,
        }
      ]
    }
  ]);


  
  export default router