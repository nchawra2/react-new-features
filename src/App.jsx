import React from "react";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/dashboard links/Profile";
import Admin from "./components/dashboard links/Admin";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/table" component={Table} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/Admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
