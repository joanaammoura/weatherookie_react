import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./App.css";
import WeatherIcon from "./WeatherIcon";

export default class AppLisbon extends Component {
  state = {};

  static defaultProps = {
    city: "lisbon",
    apiUrl: "https://api.openweathermap.org",
    apiKey: "a2bab3379d78253d88dc8ee2a172e92b"
  };

  static propTypes = {
    city: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.refreshWeatherFromUrl(
      this.props.apiUrl +
        "/data/2.5/weather?" +
        "appid=" +
        this.props.apiKey +
        "&units=metric" +
        "&q=" +
        this.props.city
    );
  }

  friendlyDate(date) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;

    return days[date.getDay()] + " " + date.getHours() + ":" + minutes;
  }

  refreshWeatherFromUrl(url) {
    axios.get(url).then(response => {
      this.setState({
        conditions: {
          city: response.data.name,
          description: response.data.weather[0].main,
          icon: response.data.weather[0].icon,
          precipitation: Math.round(response.data.main.humidity) + "%",
          temperature: Math.round(response.data.main.temp),
          time: this.friendlyDate(new Date()),
          wind: Math.round(response.data.wind.speed) + "km/h"
        }
      });
    });
  }

  render() {
    if (this.state.conditions) {
      return (
        <div>
          <div className="clearfix">
            <div className="row">
              <div className="col-md-6">
                <div className="weather">
                  <div className="weather-date">{this.state.time}</div>
                  <div className="weather-time">{this.state.time}</div>
                  <div className="weather-today">
                    <WeatherIcon iconName={this.state.conditions.icon} />
                    <div className="weather-today__temperature">
                      {this.condition.temperature} º
                    </div>
                  </div>
                  <div className="weather-location">{this.condition.city}</div>
                  <div className="weather-extras">
                    <div className="weather-precipitation">
                      Precipitation: {this.condition.precipitation}%
                    </div>
                    <div className="weather-humidity">
                      Humidity: {this.condition.humidity}%
                    </div>
                    <div className="weather-wind">
                      Wind: {this.condition.wind}km/h
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="forecast">
                <div className="days">
                  <div className="day__block day__block--selected">
                    <div className="day__block-day">
                      {this.condition.weekDays[0]}
                    </div>
                    <img
                      className="day__block-image"
                      alt="weather icon"
                      src={this.condition.imgUrl}
                    />
                    <div className="day__block-temps">
                      <span className="day__block-temp day__block-temp--max">
                        {this.condition.max[0]}º
                      </span>
                      <span> </span>
                      <span className="day__block-temp day__block-temp--min">
                        {this.condition.min[0]}º
                      </span>
                    </div>
                  </div>
                  <div className="day__block">
                    <div className="day__block-day">
                      {this.condition.weekDays[1]}
                    </div>
                    <img
                      className="day__block-image"
                      alt="weather icon"
                      src={this.condition.imgUrl}
                    />
                    <div className="day__block-temps">
                      <span className="day__block-temp day__block-temp--max">
                        {this.condition.max[1]}º
                      </span>
                      <span> </span>
                      <span className="day__block-temp day__block-temp--min">
                        {this.condition.min[1]}º
                      </span>
                    </div>
                  </div>
                  <div className="day__block">
                    <div className="day__block-day">
                      {this.condition.weekDays[2]}
                    </div>
                    <img
                      className="day__block-image"
                      alt="weather icon"
                      src={this.condition.imgUrl}
                    />
                    <div className="day__block-temps">
                      <span className="day__block-temp day__block-temp--max">
                        {this.condition.max[2]}º
                      </span>
                      <span> </span>
                      <span className="day__block-temp day__block-temp--min">
                        {this.condition.min[2]}º
                      </span>
                    </div>
                  </div>
                  <div className="day__block ">
                    <div className="day__block-day">
                      {this.condition.weekDays[3]}
                    </div>
                    <img
                      className="day__block-image"
                      alt="weather icon"
                      src={this.condition.imgUrl}
                    />
                    <div className="day__block-temps">
                      <span className="day__block-temp day__block-temp--max">
                        {this.condition.max[3]}º
                      </span>
                      <span> </span>
                      <span className="day__block-temp day__block-temp--min">
                        {this.condition.min[3]}º
                      </span>
                    </div>
                  </div>
                  <div className="day__block ">
                    <div className="day__block-day">
                      {this.condition.weekDays[4]}
                    </div>
                    <img
                      className="day__block-image"
                      alt="weather icon"
                      src={this.condition.imgUrl}
                    />
                    <div className="day__block-temps">
                      <span className="day__block-temp day__block-temp--max">
                        {this.condition.max[4]}º
                      </span>
                      <span> </span>
                      <span className="day__block-temp day__block-temp--min">
                        {this.condition.min[4]}º
                      </span>
                    </div>
                  </div>
                  <div className="day__block">
                    <div className="day__block-day">
                      {this.condition.weekDays[5]}
                    </div>
                    <img
                      className="day__block-image"
                      alt="weather icon"
                      src={this.condition.imgUrl}
                    />
                    <div className="day__block-temps">
                      <span className="day__block-temp day__block-temp--max">
                        {this.condition.max[5]}º
                      </span>
                      <span> </span>
                      <span className="day__block-temp day__block-temp--min">
                        {this.condition.min[5]}º
                      </span>
                    </div>
                  </div>
                  <div className="day__block">
                    <div className="day__block-day">
                      {this.condition.weekDays[6]}
                    </div>
                    <img
                      className="day__block-image"
                      alt="weather icon"
                      src={this.condition.imgUrl}
                    />
                    <div className="day__block-temps">
                      <span className="day__block-temp day__block-temp--max">
                        {this.condition.max[6]}º
                      </span>
                      <span> </span>
                      <span className="day__block-temp day__block-temp--min">
                        {this.condition.min[6]}º
                      </span>
                    </div>
                  </div>
                  <div className="day__block day__block--last">
                    <div className="day__block-day">
                      {this.condition.weekDays[7]}
                    </div>
                    <img
                      className="day__block-image"
                      alt="weather icon"
                      src={this.condition.imgUrl}
                    />
                    <div className="day__block-temps">
                      <span className="day__block-temp day__block-temp--max">
                        {this.condition.max[7]}º
                      </span>
                      <span> </span>
                      <span className="day__block-temp day__block-temp--min">
                        {this.condition.min[7]}º
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          App is loading, <em>please wait...</em>
        </div>
      );
    }
  }
}

// <a href="https://www.vexels.com/vectors/preview/144448/isometric-city-illustration"> Isometric city illustration </a> | designed by Vexels
