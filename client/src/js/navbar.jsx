import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ended_cutoff, live_cutoff } from "./content.json";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="container">
        <ul className="menu">
          <li id="navbar-logo">
            <a href="/">
              <div id="title">
                <span className="logo-text-2">acm</span>
                <span className="logo-text-1">-w | newberg</span>
              </div>
            </a>
          </li>
          <li className="navbar-item">
            <AnchorLink offset="100" id="home-tab" href="#home">
              home
            </AnchorLink>
          </li>
          {/* <li className="navbar-item">
            <AnchorLink offset="100" href="#team">
              our board
            </AnchorLink>
          </li> */}
          <li className="navbar-item">
            <AnchorLink offset="100" href="#challenges">
              innovation
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink offset="100" href="#faq">
              code jam faq
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <AnchorLink offset="100" id="sponsors-tab" href="#sponsors">
              sponsors
            </AnchorLink>
          </li>
          <li className="navbar-item">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://docs.google.com/document/d/1eB77gNNH6DAc-4pKUO26ZB5W1z4Glzq38pYLA7d7nSk/edit?usp=sharing"
            >
              more info
            </a>
          </li>
          {Date.now() > new Date(ended_cutoff) ? (
            <li
              className="apply-link register-btn-ext navbar-item"
              title="Live dashboard"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://forms.gle/YxomhWQR7J119TaN7"
              >
                join us
              </a>
            </li>
          ) : (
            <li
              className="apply-link register-btn-ext navbar-item"
              title="Applications open now"
            >
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://forms.gle/SALNmFXQn7x2hHz49"
              >
                interest form
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
