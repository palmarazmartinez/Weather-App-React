import React from "react";
import { Row, Col } from "react-bootstrap";
import "./DailyWeatherInfo.css";
import WeatherIcons from "./WeatherIcons";



export default function DailyWeatherInfo() {
  return (
    <div className="row" id="dailyInfo">
      <Row className="row border" id="styleRows">
          <Col className="col border-right border-info" id="styleCols">
          <p className="nextDay">TUESDAY</p>
          <WeatherIcons code="02d"/>
          <p className="dailyDescribeWeather">
              <i> Clear </i>
            </p>  <p className="minMaxTemp">
              Max: 40°F
              <br />
              Min: 20°F
            </p>
        </Col>
        <Col className="col border-right border-info" id="styleCols">
          <p className="nextDay">WEDNESDAY</p>
          <WeatherIcons code="02d"/>
          <p className="dailyDescribeWeather">
              <i> Clear </i>
            </p>  <p className="minMaxTemp">
              Max: 40°F
              <br />
              Min: 20°F
            </p>
        </Col>
        <Col className="col border-right border-info" id="styleCols">
          <p className="nextDay">THURSDAY</p>
          <WeatherIcons code="02d"/>
          <p className="dailyDescribeWeather">
              <i> Clear </i>
            </p>  <p className="minMaxTemp">
              Max: 40°F
              <br />
              Min: 20°F
            </p>
        </Col>
        <Col className="col border-right border-info" id="styleCols">
          <p className="nextDay">FRIDAY</p>
          <WeatherIcons code="02d"/>
          <p className="dailyDescribeWeather">
              <i> Clear </i>
            </p>  <p className="minMaxTemp">
              Max: 40°F
              <br />
              Min: 20°F
            </p>
        </Col>
        <Col className="col border-right border-info" id="styleCols">
          <p className="nextDay">SATURDAY</p>
          <WeatherIcons code="02d"/>
          <p className="dailyDescribeWeather">
              <i> Clear </i>
            </p>  <p className="minMaxTemp">
              Max: 40°F
              <br />
              Min: 20°F
            </p>
        </Col>
        <Col className="col" id="styleCols">
          <p className="nextDay">SUNDAY</p>
          <WeatherIcons code="02d"/>
          <p className="dailyDescribeWeather">
              <i> Clear </i>
            </p>  <p className="minMaxTemp">
              Max: 40°F
              <br />
              Min: 20°F
            </p>
        </Col>
        </Row>
  </div>
    );

  }

