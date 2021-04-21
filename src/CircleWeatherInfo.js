import React from "react";
import Col from "react-bootstrap/Col";
import ReactAnimatedWeather from "react-animated-weather";


export default function circleWeatherInfo(props) {
  return (
    <div className="circlWeatherInfo">
      <Col className="col" id="realWeatherInfo">
        <div className="rounded-circle">
          <h1 className="currentLocation"> {props.data.city} </h1>
          <p className="currentTemp">
            <a id="realTemp">
              {Math.round(props.data.temperature)}{" "}
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
          <p id="describeWeather"> {props.data.description} </p>
          <p className="temperatureInfo"> </p>
          <p id="humidity">Humidity: {props.data.humidity}% </p>
          <br />
          <p id="wind">Wind: {Math.round(props.data.wind)} km/h </p>
        </div>
      </Col>
    </div>
  );
}