import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="p-3 bg-danger w-100 d-block">
      <nav>
        <ul className="nav_ul d-flex justify-content-around w-25 list-unstyled text-light">
          <li className="nav__link"><NavLink className={({ isActive }) => isActive ? "active__link" : "navbar__tdn"} to="/">Dashboard</NavLink></li>
          <li className="nav__link"><NavLink className={({ isActive }) => isActive ? "active__link" : "navbar__tdn"} to="/books">Books</NavLink></li>
          <li className="nav__link"><NavLink className={({ isActive }) => isActive ? "active__link" : "navbar__tdn"} to="/control">Control panel</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}