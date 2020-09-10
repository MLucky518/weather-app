import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

function Landing() {
  return (
    <Jumbotron className = "jumbo">
      <h1 className="display-3">WEATHER CHEK</h1>
      <p className="lead">
        Simple Location Based Weather
      </p>
      <hr className="my-2" />
      <p>
        Just click the button and allow location services to get weather in your area
      </p>
      <p className="lead">
        <Link to = "/weather"><Button color="primary">Learn More</Button></Link>
      </p>
    </Jumbotron>
  );
}

export default Landing;
