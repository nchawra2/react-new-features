import React from "react";
import SideNav from "../dashboard links/SideNav";

const Admin = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2">
          <SideNav link3="true" />
        </div>
        <div className="col-md-10">
          <h2>Admin component</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Admin;
