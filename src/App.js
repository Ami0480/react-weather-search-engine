import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Perth" />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Ami0480" target="_blank" rel="noreferrer">
            Ami Fukuyama
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Ami0480/react-weather-search-engine"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and is{" "}
          <a
            href="https://golden-pixie-c5be61.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
