import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "25ba4b8ct7fc123o0c3d6fccfc118bbd";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />{" "}
          <div className="WeatherForcast-temperatures">
            <span className="WeatherForecast-temperatures-max">19°</span>
            <span className="WeatherForecast-temperatures-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
