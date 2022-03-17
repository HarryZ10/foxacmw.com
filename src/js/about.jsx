import React from "react";
import ReactPlayer from "react-player";
import { about_intro } from "./content.json";
import { about_body } from "./content.json";
import Countdown from "./countdown.jsx";

function About() {
  let videoURL = "https://www.youtube.com/watch?v=t1JBBZinH3Q";
  return (
    <div id="about">
      <div className="container">
        <div>
          <p className="intro">{about_intro}</p>
        </div>
        {/* <Countdown /> */}
        <div>
          <p className="body">{about_body}</p>
        </div>
        <h2 style={videoLIVE}>OFFICIAL TRAILER</h2>
        <div className="about-video">
          <ReactPlayer controls="true" url={videoURL} height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
}

const videoLIVE = {
  color: "#ffcf3f",
  fontSize: "3rem",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "1rem",
  marginTop: "2rem"
}

export default About;
