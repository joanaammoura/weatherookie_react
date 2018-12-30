import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CurrentLocation.css";

export default class CurrentLocation extends Component {
  static propTypes = { refresh: PropTypes.func.isRequired };

  _click(event) {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.refresh(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <button
        className="current-location--btn"
        onClick={event => this._click(event)}
      >
        &#9967; Current Location
      </button>
    );
  }
}
