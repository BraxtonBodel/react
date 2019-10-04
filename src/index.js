import React from "react";
import ReactDOM from "react-dom";
import BadgeNew from "./pages/BadgeNew";

import "bootstrap/dist/css/bootstrap.css";
const container = document.getElementById("root");

ReactDOM.render(
  <BadgeNew
    firstName="Braxton"
    lastName="Bonilla"
    jobTitle="Developer"
    twitter="@braxb6"
  />,
  container
);
