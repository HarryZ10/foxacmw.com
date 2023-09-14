import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { ended_cutoff } from "./content.json";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="container">
        <ul className="menu">
          <li id="navbar-logo">
            <a href="/">
              <div id="title">
                <span className="logo-text-2">acm</span>
                <span className="logo-text-1">-w newberg</span>
              </div>
            </a>
          </li>
          <li className="navbar-item home-tab">
            <AnchorLink offset="100" id="home-tab" href="#home">
              Home
            </AnchorLink>
          </li>
          {/* <li className="navbar-item track-tab">
            <AnchorLink offset="100" href="#challenges">
              Tracks
            </AnchorLink>
          </li> */}
          <li className="navbar-item faq-tab">
            <AnchorLink offset="100" href="#projects">
              Past Code Jams
            </AnchorLink>
          </li>
          <li className="navbar-item sponsor-tab">
            <AnchorLink offset="100" id="sponsors-tab" href="#sponsors">
              Past Sponsors
            </AnchorLink>
          </li>
          {/* <li className="navbar-item more-info">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://docs.google.com/document/d/1eB77gNNH6DAc-4pKUO26ZB5W1z4Glzq38pYLA7d7nSk/edit?usp=sharing"
            >
              More Info
            </a>
          </li> */}
          {/* {Date.now() > new Date(ended_cutoff) ? (
            <li
              className="apply-link register-btn-ext navbar-item"
              title="Live dashboard"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://live.foxacmw.com"
              >
                Code Jam Live
              </a>
            </li>
          ) : (
            <li
              className="apply-link register-btn-ext navbar-item"
              title="Club Leader Application"
            >
           
            </li>
          )} */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
