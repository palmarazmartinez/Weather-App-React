import axios from "axios";
import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./WeeklyWeatherInfo.css";
import WeatherIcons from "./WeatherIcons";
import DayWeatherInfo from "./DayWeatherInfo";


export default function DailyWeatherInfo(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  
  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);

  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="row" id="dailyInfo">
        <Row className="row border" id="styleRows">
          <Col className="col border-right border-info" id="styleCols">
           <DayWeatherInfo data={forecastData[0]} />
          </Col>
          <Col className="col border-right border-info" id="styleCols">
            <p className="nextDay">WEDNESDAY</p>
            <WeatherIcons code="02d" />
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
            <WeatherIcons code="02d" />
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
            <WeatherIcons code="02d" />
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
            <WeatherIcons code="02d" />
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
            <WeatherIcons code="02d" />
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
  } else {
    let apiKey = `51ea909910c3284455f83b220441cc78`;
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return null;
  }
}


