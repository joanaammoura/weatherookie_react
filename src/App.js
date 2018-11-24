import React, { Component } from "react";
import "./App.css";

class App extends Component {
  condition = {
    date: "Saturday, 24th November 2018",
    time: "20:00",
    imgUrl: "http://openweathermap.org/img/w/02d.png",
    temperature: 11,
    city: "Lisbon",
    precipitation: "100",
    humidity: "89",
    wind: "9",
    weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    max: ["11", "10", "12", "14", "14", "10", "9", "10"],
    min: ["9", "8", "10", "11", "13", "9", "7", "8"]
  };

  render() {
    return (
      <div>
        <div className="clearfix">
          <div className="row">
            <div className="col-md-6">
              <div className="weather">
                <div className="weather-date">{this.condition.date}</div>
                <div className="weather-time">{this.condition.time}</div>
                <div className="weather-today">
                  <div className="weather-today__icon">
                    <img
                      className="weather-today__icon--img"
                      alt="weather icon"
                      src={this.condition.imgUrl}
                    />
                  </div>
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
  }
}

export default App;

// <a href="https://www.vexels.com/vectors/preview/144448/isometric-city-illustration"> Isometric city illustration </a> | designed by Vexels
