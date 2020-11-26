import React, { Component, useState } from "react";
import "../styles/App.css";
import Home from "./Home";
import About from "./About";
// import Location from "./LocationDisplay";
import { useLocation, Link, Route, Switch } from "react-router-dom";

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const myHookValue = useLocation();
    return <Component {...props} myHookValue={myHookValue} />;
  };
}

class App extends Component {
  that = this;

  render() {
    const location = this.props.myHookValue;
    console.log(location);
    return (
      <>
        <div id="main">
          <p data-testid="location-display"> {location.pathname}</p>
          {/* <Location /> */}
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">Dashboard</Link>
          </nav>
          {location.pathname === "/" || location.pathname === "/about"
            ? ""
            : "Not Match"}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />

          {/* Do not remove the main div */}
        </div>
      </>
    );
  }
}

export default withMyHook(App);
