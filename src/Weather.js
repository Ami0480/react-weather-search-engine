import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <h1>Perth</h1>
      <div className="row">
        <div className="col-6 mt-3">
          <ul>
            <li>Monday 13:00, Mostly Cloudy</li>
            <li>Humidity:80%, Wind:13km/h</li>
          </ul>
        </div>
        <div className="col-6 ">
          <img src="#" className="float-left" />

          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
