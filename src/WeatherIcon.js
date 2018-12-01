import React, { Component } from "react";

export default class WeatherIcon extends Component {
  url(icon) {
    return "http://openweathermap.org/img/w/" + icon + ".png";
  }

  render() {
    return (
      <img
        className="weather__icon weather__icon--today"
        alt="weather icon"
        src={this.url(this.props.icon)}
      />
    );
  }
}
