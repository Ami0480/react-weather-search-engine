import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";

export default function WeatherForcast() {
  return (
    <div className="WeatherForcast">
      <div className="row"></div>
      <div className="col">
        <div className="WeatherForcast-day">Thu</div>
        <WeatherIcon code="01d" size={36} />{" "}
        <div className="WeatherForcast-temperatures">
          <span className="WeatherForcast-temperatures-max">19°</span>
          <span className="WeatherForcast-temperatures-min">10°</span>
        </div>
      </div>
    </div>
  );
}
