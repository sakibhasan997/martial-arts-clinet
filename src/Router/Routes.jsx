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
import AdminRoute from "./AdminRoute";
import AddClass from "../Pages/Dashboard/AddItem/AddClass";
import InstructorRoute from "./InstructorRoute";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import InstructorHome from "../Pages/Dashboard/InstructorHome/InstructorHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import InstructorsAddClass from "../Pages/Dashboard/InatructorAddClass/InstructorsAddClass";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
      // errorElement: <ErrorPage/>,
      children: [
        // Students Routes
        {
          path: 'studentHome',
          element: <StudentHome/>
        },
        {
          path: 'myclasses',
          element: <MyClasses/>
        },
        {
          path: 'payment',
          element: <Payment/>
        },

        // Instructor Routes
        {
          path: 'instructorHome',
          element: <InstructorRoute><InstructorHome/></InstructorRoute>,
        },
        {
          path: 'addClass',
          element: <InstructorRoute><AddClass/></InstructorRoute>,
        },
        {
          path: 'InstructorClass',
          element: <InstructorRoute><InstructorsAddClass/></InstructorRoute>,
        },

        // Admin Routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome/></AdminRoute>
        },
        {
          path: 'allStudents',
          element: <AdminRoute><AllStudents/></AdminRoute>
        },
      ]
    }
  ]);


  
  export default router