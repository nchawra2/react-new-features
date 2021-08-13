import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light navbar-expand-md">
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
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
