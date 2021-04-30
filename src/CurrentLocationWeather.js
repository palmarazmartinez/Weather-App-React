import React,{useState} from "react";
import axios from "axios";
import { Form, Button, Col, Row } from "react-bootstrap";
import TodaysDate from "./TodaysDate";
import CircleWeatherInfo from "./CircleWeatherInfo";
import WeeklyWeatherInfo from "./WeeklyWeatherInfo";
import "./SearchForm.css";
import pin from "./images/pin.png";
import "./CircleWeatherInfo.css";
import Loader from "react-loader-spinner";





export default function CurrentLocation(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
   console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }
  function searchLocation() {
    const apiKey = `51ea909910c3284455f83b220441cc78`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  
}

  function handleSubmit(event) {
    event.preventDefault();
    searchLocation();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
}

  
function geolocationPosition(position) {
  let Lat = position.coords.latitude;
  let Lon = position.coords.longitude;
  const apiKey = `51ea909910c3284455f83b220441cc78`;
  let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=${apiKey}&units=imperial`;
  axios.get(geoUrl).then(handleResponse);
}

  function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(geolocationPosition);
}
  
  
  
  if (weatherData.ready) {
    return (
      <div calssName="mainWeatherAppInfo">
      <Row className="row">
        <Col className="col">
          <Form id="search-location"
          onSubmit={handleSubmit}>
            <Button
              type="button"
              className="btn btn-outline-light btn-sm"
                id="exact-location-btn"
                onClick={getCurrentLocation}
            >
                <img src={pin} alt="blue-drop-pin" className="blueDropPin"/>
            </Button>{" "}
            <input
              type="search"
              className="form-control-sm text-center border-info"
              id="location-input"
              placeholder="FIND A LOCATION"
              autocomplete="off"
              onChange={handleCityChange}
            />{" "}
            <input
              type="submit"
              className="search-btn btn-outline-light btn-sm"
              value="🔍"
            />
          </Form>
          <TodaysDate date={weatherData.date} />
        </Col>
      </Row>
        <CircleWeatherInfo data={weatherData} />
        <h2 className="dailyWeatherHeading">Your Daily Weather</h2>
        <WeeklyWeatherInfo coordinates={weatherData.coordinates}/>
      
    </div>
  );
  }
  else {
    searchLocation();
    return (
      
      <div className="reactLoader">
        <h1 className="loadText">LOADING</h1>
        <Loader
          type="ThreeDots"
          color="#f9fcfb"
          height={200}
          width={200}
          timeout={3000}
        /></div>
        
      );
    }
  }