import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfor(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row">
        <div className="col-6 mt-3">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
              <div className="text-uppercase">{props.data.description}</div>
            </li>
            <li>
              Humidity:{props.data.humidity}%, Wind:{props.data.wind}km/h
            </li>
          </ul>
        </div>
        <div className="col-6 ">
          <img src={props.data.iconUrl} className="float-left" />

          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
