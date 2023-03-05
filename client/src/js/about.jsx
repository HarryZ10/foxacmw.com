import React from "react";
import { about_body } from "./content.json";
// import { about_intro } from "./content.json";
// import Countdown from "./countdown.jsx";

function About() {
  return (
    <div id="about">
      <div className="container">
        {/* <div>
          <p className="intro">{about_intro}</p>
        </div>
        <Countdown /> */}

        <div>
          <p className="body">{about_body}</p>
        </div>

        {/* <div style={{ paddingTop: "100px" }}>
          <p className="intro center">
            Our goal as a part of ACM-W is to create a community within our
            Computer Science and Information Systems department. Even though we
            are a chapter focusing on women inclusion in tech, we want to
            provide a positive environment for everyone.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default About;
