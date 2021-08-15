import React from "react";
import SideNav from "./dashboard links/SideNav";

const Home = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2 col-2">
          <SideNav link1="true" />
        </div>
        <div className="col-md-10 col-10">
          <h2>Home</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
