import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import App from './App'
import Appointment from "./pages/Appointment";
import Home from './components/Home'
import './index.css'
import Records from "./pages/Records";
import Billing from "./pages/Billing"


const router = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/Appointment',
      element:<Appointment/>
    },
    {
      path:'/Records',
      element:<Records/>
    },
    {
      path:'/Billing',
      element:<Billing/>
    }
  ]
}


])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


