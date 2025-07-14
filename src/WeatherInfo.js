import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
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
              <div className="text-uppercase mt-3 ">
                {props.data.description}
              </div>
            </li>
            <li className="description mb-3">
              Humidity:{props.data.humidity}%, Wind:{props.data.wind}km/h
            </li>
          </ul>
        </div>

        <div className="col-6 d-flex align-items-center">
          <span className="me-2 mt-1">
            <WeatherIcon code={props.data.icon} size={52} />
          </span>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
