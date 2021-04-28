import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function dayWeatherInfo(props) {

  function displayDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];


    return days[day];
  }
  return (
    <div className="showDayWeather">
      <p className="nextDay"> {displayDay()}</p>
      <WeatherIcons code={props.data.weather[0].icon} />
      <p className="dailyDescribeWeather">
        <i> {props.data.weather[0].main} </i>
      </p>  <p className="minMaxTemp">
        Max: {Math.round(props.data.temp.max)}°F
  <br />
  Min: {Math.round(props.data.temp.min)}°F
</p>
    </div>
  );
}

