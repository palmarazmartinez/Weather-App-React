import React from "react";


export default function TodaysDate(props) {
  //console.log(props.date);
  let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  let day = days[props.date.getDay()];  
  let year = props.date.getFullYear();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let month = months[props.date.getMonth()];
let date = props.date.getDate();

function formatAMPM(props) {
  var hours = props.date.getHours();
  var minutes = props.date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}


  return (
    <div className="todaysDate">
      <p className="todayIs">
        {day}
        <br />
        {month} {date}, {year}
        <br />
      </p>
      <p className="displayTime">{formatAMPM(props)}</p>
    </div>
  );
}
