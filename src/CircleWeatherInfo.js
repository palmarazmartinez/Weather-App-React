import React from "react";
import Col from "react-bootstrap/Col";
import { faTint,faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeatherIcons from "./WeatherIcons";


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
          <WeatherIcons code={props.data.icon} size={90}/>
          <p id="describeWeather"> {props.data.description} </p>
          <p className="temperatureInfo"> </p>
         <p id="humidity"> <FontAwesomeIcon icon={faTint} className="humidIcon"/> Humidity: {props.data.humidity}% </p>
          <br />
          <p id="wind"><FontAwesomeIcon icon={faWind} className="windIcon" /> Wind: {Math.round(props.data.wind)} km/h </p>
        </div>
      </Col>
    </div>
  );
}