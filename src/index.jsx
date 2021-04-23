import React from "react";
import { render } from "react-dom";
import App from "./components/App.jsx";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
