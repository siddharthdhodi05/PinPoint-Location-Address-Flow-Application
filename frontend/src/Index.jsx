import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./Layout";

// Define routes
const router = createBrowserRouter([
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
  },
]);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
