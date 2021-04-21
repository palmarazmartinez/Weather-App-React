import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DailyWeatherInfo.css";
import ReactAnimatedWeather from "react-animated-weather";
import { faTint,faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function DailyWeatherInfo(props) {
  
    return (
      <div className="weatherColumn">
        <Row className="row border" id="styleRows">
          <Col className="col-6 col-md-4" id="daySpace">
            <p className="nextDay"> {props.day} </p>
          </Col>
  
          <Col className="col-6 col-sm-3" id="weatherSpace">
          <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#fe346e"
          size={50}
          animate={true}
        />
            <p className="minMaxTemp">
              Max: {props.maxTemp}°F
              <br />
              Min: {props.minTemp}°F
            </p>
          </Col>
  
          <Col className="col-6 col-md-5" id="tempSpace">
            <p className="dailyDescribeWeather">
              <i> {props.weatherDescription} </i>
            </p>
            <p className="dailyHumidityText">
              {" "}
              <FontAwesomeIcon icon={faTint} /> Humidity: {props.dailyHumidity}%{" "}
            </p>
            <p className="dailyWindText">
              {" "}
              <FontAwesomeIcon icon={faWind} /> Wind: {props.dailyWind} km/h{" "}
            </p>
          </Col>
        </Row>
      </div>
    );

  }

