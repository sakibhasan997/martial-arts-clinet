import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import PasswordValidation from "../Layout/PasswordValidation";
import Register from "../Pages/Shared/Register/Register";
import ErrorPage from "../Pages/Shared/404-Page/ErrorPage";
import Classes from "../Pages/Classes/Classes";
import AllInstructors from "../Pages/Instructors/AllInstructors";
import Dashboard from "../Layout/Dashboard";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import PrivateRoute from "./PrivateRoute";
import AllStudents from "../Pages/Dashboard/AllStudents/AllStudents";

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
        },
        {
          path: '/classes',
          element: <Classes/>
        },
        {
          path: '/allinstructors',
          element: <AllInstructors/>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path: 'myclasses',
          element: <MyClasses/>
        },
        {
          path: 'allStudents',
          element: <AllStudents/>
        },
      ]
    }
  ]);


  
  export default router