import React from "react";
import { Article } from "../../Components";
const logo = require("../../img/logo512.png");
export function About() {
  return (
    <div>
      <Article head="Categories">
        <h1> General description.</h1>
        <img alt="asdasd" src={logo} />
      </Article>
    </div>
  );
}
