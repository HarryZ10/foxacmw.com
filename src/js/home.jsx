import React from "react";
import codejam_text from "../png/codejam-text.png";

class Home extends React.Component {

  render() {
    return (
      <div id="home">
        <img
          className="logo scale-in-center"
          src={codejam_text}
          alt="treehacks large text"
        />

        <div className='rowC'>

          <div id="date-text">
            April 1-3, 2022
            <br />
            George Fox University

          <a href="#" className="apply-button">
            Registration Closed
          </a>

          </div>
        </div>

      </div>
    );
  }
}

export default Home;
