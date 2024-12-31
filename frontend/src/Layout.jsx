import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import App from "./App";
import Login from "./components/Login";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const isLoggedIn = useSelector((state) => state.login.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);

  return (
    <>
      {isLoggedIn ? <App /> : <Login />}
    </>
  );
};

export default Layout;
