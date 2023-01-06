import '../App.css';
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from '../Pages/About';
import Home from '../Pages/Home';
import Users from "../Pages/Users";
import SignUpContainer from "../Pages/Sign Up/SignUpContainer";

function Routes(){

    const router = createBrowserRouter([
      {
        path: "/",
        element: 
        <div>
          {/* <Home/> */}
    <SignUpContainer/>
          </div>,
      },
      {
        path: "about",
        element: <div><About/></div>,
      },
      {
        path: "users",
        element: <div><Users/></div>,
      },
        {
            path: "sign-up",
            element: <div><SignUpContainer></SignUpContainer></div>,
        },
    ]);

    createRoot(document.getElementById("root")).render(
          <RouterProvider router={router} />
    );
}

export default Routes;
