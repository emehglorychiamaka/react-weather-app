import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          created by{" "}
          <a
            href="https://www.linkedin.com/in/emeh-glory-chiamaka-9586b0aa"
            target="_blank"
            rel="noreferrer"
          >
            Emeh Glory Chiamaka{" "}
          </a>{" "}
          and open sourced on{" "}
          <a
            href="https://github.com/emehglorychiamaka/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
