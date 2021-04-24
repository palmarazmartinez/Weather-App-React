import React, {useState} from "react";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");
  
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  
  
  if (unit === "fahrenheit") {
    return (
      <a id="realTemp">
        {Math.round(props.fahTemp)}{" "}
        <small>
          <a href="/" id="fahrenheit-link"> °F </a> |<a id="celsius-link" onClick={convertToCelsius}> °C</a>
        </small>{" "}
      </a>
    );
  } else {
    let celsius = ((props.fahTemp - 32) / 1.8);
    return (
      <a id="realTemp">
        {Math.round(celsius)}{" "}
        <small>
          <a href="/" id="fahrenheit-link" onClick={showFahrenheit}> °F </a> |<a id="celsius-link"> °C</a>
        </small>{" "}
      </a>
    );
  }
}


