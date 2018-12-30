import React, { Component } from "react";
import axios from "axios";
import Api from "./Api";
import DateUtil from "./DateUtil";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default class WeatherForecast extends Component {
  state = {
    city: this.props.city
  };
  componentWillMount() {
    this.refresh();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ city: nextProps.city }, () => {
      this.refresh();
    });
  }

  refresh = () => {
    let url = `${Api.url}/data/2.5/forecast?appid=${Api.key}&units=metric&q=${
      this.state.city
    }`;

    axios.get(url).then(response => {
      let forecast = response.data.list;
      // The API returns the forecast every 3 hour, so we are exrtacting
      // the weather for every 24 hours which 8 times 3 hour cycles
      let dailyForecast = [7, 15, 23, 31, 39].map(index => {
        return {
          icon: forecast[index].weather[0].icon,
          max: Math.round(forecast[index].main.temp_min) + "º",
          min: Math.round(forecast[index].main.temp_max) + "º",
          day: new DateUtil(
            new Date(forecast[index].dt * 1000)
          ).dayShortVersion()
        };
      });
      this.setState({ forecast: dailyForecast });
    });
  };

  render() {
    if (this.state.forecast) {
      return (
        <div className="clearfix">
          <div className="row">
            {this.state.forecast.map((weather, index) => {
              return (
                <div className="day__block" key={index}>
                  <div className="day__block-day">{weather.day}</div>
                  <div className="day__block-image">
                    <WeatherIcon iconName={weather.icon} />
                  </div>
                  <div className="day__block-temps">
                    {/* <span className="day__block-temp day__block-temp--min"> */}
                    {weather.min}
                    {/*                     </span>
                    <span> </span>
                    <span className="day__block-temp day__block-temp--max">
                      {weather.max}
                    </span> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

// <a href="https://www.vexels.com/vectors/preview/144448/isometric-city-illustration"> Isometric city illustration </a> | designed by Vexels
