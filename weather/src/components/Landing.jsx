import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

function Landing(props) {
  return (
    <Jumbotron responsive className = "jumbo">
      <h1  className="display-3">WEATHERCHEK</h1>
      <p className="lead">
        Simple Location Based Weather
      </p>
      <hr className="my-2" />
      <p>
        Just click the button and allow location services to get weather in your area
      </p>
      <p className="lead">
        <Link to = "/weather"><Button onClick= {()=>props.getWeather()} color="primary">Learn More</Button></Link>
      </p>
    </Jumbotron>
  );
}

export default Landing;
