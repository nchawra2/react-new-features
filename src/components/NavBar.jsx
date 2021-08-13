import React from "react";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NEW FEATURES
          </a>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/table" className="nav-link">
                  Complex Table
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
