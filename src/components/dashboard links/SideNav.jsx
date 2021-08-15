import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ link1, link2, link3 }) => {
  return (
    <React.Fragment>
      <ul className="nav flex-column sidenav">
        <li className="nav-item">
          <NavLink
            className={`nav-link ${link1 === "true" ? "active-sidenav" : ""}`}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={`nav-link ${link2 === "true" ? "active-sidenav" : ""}`}
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={`nav-link ${link3 === "true" ? "active-sidenav" : ""}`}
            to="/admin"
          >
            Admin
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default SideNav;
