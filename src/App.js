import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Aba, Abia State" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/emeh-glory-chiamaka-9586b0aa"
            target="_blank"
            rel="noreferrer"
          >
            Emeh Glory Chiamaka{" "}
          </a>{" "}
          open sourced on{" "}
          <a
            href="https://github.com/emehglorychiamaka/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>{" "}
          and{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
