import React, { useState } from "react";
import "./WeatherCard.scss";

function WeatherCard({ weatherData }) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  console.log(weatherData);
  return (
    <div>
      <div className={`weathercard ${isHidden === true ? "closed" : "open"}`}>
        <h1>{weatherData.name}</h1>
        <div>info</div>
      </div>
      <button onClick = {() => toggleHidden()}>Unhide</button>
    </div>
  );
}

export default WeatherCard;
