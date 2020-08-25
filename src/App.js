import React from "react";
// import { Router, Switch, Route } from "react-router";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage.js";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Mandali&display=swap"
        rel="stylesheet"
      ></link>
      <Homepage />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
