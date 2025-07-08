import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city.."></input>
        <input type="submit" value="Search"></input>
      </form>
      <h1>Perth</h1>
      <ul>
        <li>Monday 13:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="#" alt="Mostly Cloudy" />
          6C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:80%</li>
            <li>Wind:13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
