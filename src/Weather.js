import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Weather.css";
import Api from "./Api";
import DateUtil from "./DateUtil";
import WeatherIcon from "./WeatherIcon";
import Search from "./Search";
import CurrentLocation from "./CurrentLocation";
import WeatherForecast from "./WeatherForecast";

export default class WeatherToday extends Component {
  static propTypes = {
    city: PropTypes.string.isRequired
  };

  state = { city: this.props.city };

  componentWillMount() {
    this.refresh(this.state.city);
  }

  refreshWeatherFromParams(params) {
    let url = `${Api.url}/data/2.5/weather?appid=${
      Api.key
    }&units=metric&${params}`;
    axios.get(url).then(response => {
      this.setState({
        city: response.data.name,
        weather: {
          description: response.data.weather[0].main,
          icon: response.data.weather[0].icon,
          humidity: Math.round(response.data.main.humidity) + "%",
          temperature: Math.round(response.data.main.temp) + "º",
          day: new DateUtil(new Date(response.data.dt * 1000)).day(),
          time: new DateUtil(new Date(response.data.dt * 1000)).time(),
          wind: Math.round(response.data.wind.speed) + "km/h",
          max: Math.round(response.data.main.temp_max) + "º",
          min: Math.round(response.data.main.temp_min) + "º"
        }
      });
    });
  }

  refreshWeatherFromLatitudeAndLongitude = (latitude, longitude) => {
    this.refreshWeatherFromParams(`lat=${latitude}&lon=${longitude}`);
  };

  refresh = city => {
    this.refreshWeatherFromParams(`q=${city}`);
  };

  render() {
    if (this.state.weather) {
      return (
        <div className="grid">
          <div className="weather">
            <div className="weather-date">{this.state.weather.day}</div>
            <div className="weather-time">{this.state.weather.time}</div>
            <div className="weather-today">
              <WeatherIcon iconName={this.state.weather.icon} size={98} />
              <div className="weather-today__temperature">
                {this.state.weather.temperature}
              </div>
            </div>
            <div className="weather-location">{this.state.city}</div>
            <div className="weather-extras">
              <div className="weather-humidity">
                Humidity: {this.state.weather.humidity}
              </div>
              <div className="weather-wind">
                Wind: {this.state.weather.wind}
              </div>
            </div>
          </div>
          <div className="search">
            <Search refresh={this.refresh} />
          </div>
          <div className="currentLocation">
            <CurrentLocation
              refresh={this.refreshWeatherFromLatitudeAndLongitude}
            />
          </div>
          <div className="forecast">
            <WeatherForecast city={this.state.city} />
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
