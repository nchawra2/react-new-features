import React from "react";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/table" component={Table} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
