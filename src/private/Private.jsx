import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Login from "../components/Login";

export default function Private() {
  let isAuth = true
  return(
    <>
      {isAuth ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}