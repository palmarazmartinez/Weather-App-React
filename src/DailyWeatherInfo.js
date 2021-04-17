import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./DailyWeatherInfo.css";
import ReactAnimatedWeather from "react-animated-weather"

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
            <i className="fas fa-tint" id="dailyHumidityIcon"></i> Humidity: {props.dailyHumidity}%{" "}
          </p>
          <p className="dailyWindText">
            {" "}
            <i className="fas fa-wind" id="dailyWindIcon"></i> Wind: {props.dailyWind} km/h{" "}
          </p>
        </Col>
      </Row>
    </div>
  );
}
