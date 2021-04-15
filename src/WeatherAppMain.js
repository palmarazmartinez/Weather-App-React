import React from "react";
import DailyWeatherInfo from "./DailyWeatherInfo";

export default function WeatherAppMain() {
  return (
    <div className="weatherAppMain">
      <DailyWeatherInfo
        day="WEDNESDAY"
        minTemp={10}
        maxTemp={35}
        weatherDescription="Clear"
        dailyHumidity={25}
        dailyWind={2}
      />

      <DailyWeatherInfo
        day="THURSDAY"
        minTemp={15}
        maxTemp={40}
        weatherDescription="Clear"
        dailyHumidity={30}
        dailyWind={4}
      />
      <DailyWeatherInfo
        day="FRIDAY"
        minTemp={20}
        maxTemp={45}
        weatherDescription="Clear"
        dailyHumidity={20}
        dailyWind={2}
      />
      <DailyWeatherInfo
        day="SATURDAY"
        minTemp={25}
        maxTemp={50}
        weatherDescription="Clear"
        dailyHumidity={15}
        dailyWind={4}
      />

      <DailyWeatherInfo
        day="SUNDAY"
        minTemp={30}
        maxTemp={45}
        weatherDescription="Clear"
        dailyHumidity={10}
        dailyWind={2}
      />
      <DailyWeatherInfo
        day="MONDAY"
        minTemp={35}
        maxTemp={55}
        weatherDescription="Clear"
        dailyHumidity={25}
        dailyWind={4}
      />
    </div>
  );
}
