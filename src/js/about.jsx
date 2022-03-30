import React from "react";
import ReactPlayer from "react-player";
import { about_intro } from "./content.json";
import { about_body } from "./content.json";

function About() {
  let videoURL = "https://www.youtube.com/watch?v=t1JBBZinH3Q";
  return (
    <div id="about">
      <div className="container">
        {/* <div>
          <p className="intro">{about_intro}</p>
        </div> */}

        {/* <div>
          <p className="body">{about_body}</p>
        </div> */}
        <h2 style={videoLIVE}>Welcome to ACM-W!</h2>
        <div className="about-video center" style={{ paddingTop: '50px' }}>
          <ReactPlayer controls="true" url={videoURL} height="100%" width="100%" />
        </div>

        <div style={{ paddingTop: '100px' }}>
          <p className="intro center">
            Our goal as a part of ACM-W is to create a community within our Computer Science and Information Systems department. Even though we are a chapter focusing on women inclusion in tech, we want to provide a positive environment for everyone.
            </p>
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
