import React from "react";
import codejam_text from "../png/codejam-text.png";

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <img
          className="logo scale-in-center"
          src={codejam_text}
          alt="codejam large text"
        />

        <div className="rowC">
          <div id="date-text">
            Check back in 2023 for our next Code Jam!
            <br />
            George Fox University
            {/* <a
              rel="noopener noreferrer"
              target="_blank"
              href="/"
              className="apply-button"
              aria-disabled
            >
              Join the Board
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
