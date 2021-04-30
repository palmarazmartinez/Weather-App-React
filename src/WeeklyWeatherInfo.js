import axios from "axios";
import React, { useState,useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "./WeeklyWeatherInfo.css";
import DayWeatherInfo from "./DayWeatherInfo";


export default function DailyWeatherInfo(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);

  }
  if (loaded) {
    console.log(forecastData);
    return (
      <div className="row" id="dailyInfo">
        <Row className="row" id="styleRows">
          {forecastData.map(function (WeeklyWeatherInfo, index) {
            if (index < 6){
              return (
                <Col className="col border border-info" id="styleCols" key={index}>
                  <DayWeatherInfo data={WeeklyWeatherInfo} />
                </Col>
              );
            } else {
              return null;
            }
          })}
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


