import React from "react";
import SideNav from "../dashboard links/SideNav";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2">
          <SideNav link2="true" />
        </div>
        <div className="col-md-10">
          <h2>Profile component</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
