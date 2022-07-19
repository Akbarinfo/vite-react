import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function Private() {
  let isAuth = true
  return(
    <>
      {isAuth ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}