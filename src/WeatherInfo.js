import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo";

export default function WeatherInfor(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6 mt-3">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
              <div className="text-uppercase mt-3">
                {props.data.description}
              </div>
            </li>
            <li>
              Humidity:{props.data.humidity}%, Wind:{props.data.wind}km/h
            </li>
          </ul>
        </div>

        <div className="col-6 d-flex align-items-center">
          <span className="me-2 mt-1">
            <WeatherIcon code={props.data.icon} />
          </span>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit ms-1 ">°C</span>
        </div>
      </div>
    </div>
  );
}
