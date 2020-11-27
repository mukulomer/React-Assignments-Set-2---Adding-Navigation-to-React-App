import React, { Component, useState } from "react";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
import LocationDisplay from "./LocationDisplay";
import { Route, Link, Switch, useLocation } from "react-router-dom";

function Invalid() {
  return <div>No match</div>;
}
class App extends Component {
  render() {
    return (
      <>
        <div id="main">
          {/* Do not remove the main div */}
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/" component={Invalid} />
          </Switch>
          <LocationDisplay />
        </div>
      </>
    );
  }
}

export default App;
export const LocationDisplay = LocationDisplay;
