import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage.js";
import English from "./Components/English/English.js";
import German from "./Components/German/German.js";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Mandali&display=swap"
        rel="stylesheet"
      ></link>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/german" component={German} />
          <Route exact path="/english" component={English} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
