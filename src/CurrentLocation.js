import React,{useState} from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import ReactAnimatedWeather from "react-animated-weather"

import "./CurrentLocation.css";

export default function CurrentLocation(props) {
  const [weatherData, setWeatherData] = useState({ready:false});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      //city: response.data.main.name,
      //icon: response.data.weather[0].icon,
    });
  }
  if (weatherData.ready) {
    return (
      <Col className="col" id="realWeatherInfo">
        <div className="rounded-circle">
          <h1 className="currentLocation"> Chicago</h1>
          <p className="currentTemp">
            <a id="realTemp">
              {Math.round(weatherData.temperature)}{" "}
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
          <p id="describeWeather"> {weatherData.description} </p>
          <p className="temperatureInfo"> </p>
          <p id="humidity"> Humidity: {weatherData.humidity}% </p>
          <br />
          <p id="wind"> Wind: {Math.round(weatherData.wind)} km/h </p>
        </div>
      </Col>
    );
  }else{
    const apiKey = `51ea909910c3284455f83b220441cc78`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }
}