import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (err) => console.log(err)
    );
  }, []);

  const getWeatherByZip = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res);
        console.log("RESULTS BY ZIP:");
        console.log("CITY_NAME:", res.data.name);
        console.log("CURRENT WEATHER:", res.data.weather[0].main);
        console.log("DESCRIPTION:", res.data.weather[0].description);
        console.log("CURRENT DT: (datetime)", res.data.dt);
      })
      .catch((err) => {
        console.log("Error loading by Zip", err);
      });
  };
  return (
    <Router>
      <Switch>
        <div className="App">
        <Route exact path="/"><Landing/></Route>
          <Route exact path="/weather"><WeatherCard /></Route>
          <button onClick={() => getWeatherByZip()} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
