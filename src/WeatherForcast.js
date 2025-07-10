import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

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
