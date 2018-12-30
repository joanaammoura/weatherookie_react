import React, { Component } from "react";
import "./App.css";
import Weather from "./Weather";

export default class App extends Component {
  render() {
    return (
      <div>
        <Weather city="lisbon" />
      </div>
    );
  }
}
