import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  constant[(ready, setReady)] = useState(false);
  constant[(weatherData, setweatherData)] = useState({});
  function handleResponse(response) {
    setweatherData([
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description
    ]);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Input city..."
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
        <h1>{weatherData.city}</h1>
        <h3>Weather</h3>
        <ul>
          <li>Thursday 13:02</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Cloudy"
                className="float-left"
              />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 22% </li>
              <li>Humidity: {weatherData.humidity} </li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "889c7f3ed9dacba9e272eab879e0a867";
    let city = "Aba, Abia State";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
