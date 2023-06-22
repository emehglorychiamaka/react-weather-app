import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="input city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="button"
              value="Search"
              className="btn btn-warning w-100"
            />
          </div>
        </div>
      </form>{" "}
      <h1>Aba, Abia State</h1>
      <h3>Weather</h3>
      <ul>
        <li>Thursday 13:02</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloudy"
              className="float-left"
            />
            <span className="temperature">26 </span>{" "}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 22% </li>
            <li>Humidity: 90% </li>
            <li>Wind: 11 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
