import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
