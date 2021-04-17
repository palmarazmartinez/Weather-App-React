import React from "react";
import Col from "react-bootstrap/Col";
import ReactAnimatedWeather from "react-animated-weather"

import "./CurrentLocation.css";

export default function CurrentLocation() {
  return (
    <Col className="col" id="realWeatherInfo">
      <div className="rounded-circle">
        <h1 className="currentLocation"> Chicago </h1>
        <p className="currentTemp">
          <a id="realTemp">
            23{" "}
            <small>
              <a id="fahrenheit-link"> °F </a> |<a id="celsius-link"> °C</a>
            </small>{" "}
          </a>
        </p>
        <i id="circleIcon"> </i>
        <ReactAnimatedWeather
        icon="CLOUDY"
        color="#fe346e"
        size={115}
        animate={true}
      />
        <p id="describeWeather"> Clouds </p>
        <p className="temperatureInfo"> </p>
        <p id="humidity"> Humidity: 33% </p>
        <br />
        <p id="wind"> Wind: 12 km/h </p>
      </div>
    </Col>
  );
}
