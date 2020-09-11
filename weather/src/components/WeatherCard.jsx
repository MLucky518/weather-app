import React from "react";

function WeatherCard({ weatherData }) {
  console.log(weatherData);
  return (
    <div>
      <h1>{weatherData.name}</h1>
      <div>info</div>
    </div>
  );
}

export default WeatherCard;
