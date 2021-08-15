import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light navbar-expand-md" id="BackToTop">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            NEW FEATURES
          </NavLink>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/table" className="nav-link">
                  Complex Table
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/home" className="nav-link">
                  Home Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/html" className="nav-link">
                  HTML THINGS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
