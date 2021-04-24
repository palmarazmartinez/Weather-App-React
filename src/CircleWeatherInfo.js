import React from "react";
import Col from "react-bootstrap/Col";
import { faTint,faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeatherIcons from "./WeatherIcons";
import TempConversion from "./TempConversion";


export default function circleWeatherInfo(props) {
  return (
    <div className="circlWeatherInfo">
      <Col className="col" id="realWeatherInfo">
        <div className="rounded-circle">
          <h1 className="currentLocation"> {props.data.city} </h1>
          <p className="currentTemp">
            <TempConversion fahTemp={props.data.temperature}/>
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