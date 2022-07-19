import React from "react";

export default function Footer() {
  return(
    <div className="p-3 w-100 bg-danger text-center text-light">
      Admin Dashboard - {new Date().getFullYear()}
    </div>
  )
}