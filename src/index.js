import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "../src/landingPage/App";
// import App from "../src/captcha/App";
import App from '../src/BlogSection/App'

ReactDom.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
