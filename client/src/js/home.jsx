import React from "react";
import codejam_text from "../png/LogoOnly.png";

const ButtnGroup = {
  display: "flex",
  flexDirection: "row",
  marginTop: "30px",
};

const ButtnGroup = {
  display: "flex",
  flexDirection: "row",
  marginTop: "30px",
};

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <div
          className="rowIntro"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5%",
            paddingLeft: "10%",
            width: "100%",
          }}
        >
          <h1 id="gradient_text" style={{ fontSize: "70px" }}>
            Code Jam <span id="year-text">2023</span>
          </h1>
          <h1
            id="subtext_intro"
            style={{
              color: "black",
              fontWeight: "600",
              fontSize: "35px",
              width: "fit-content",
            }}
          >
            <span
              id=""
              style={{
                fontWeight: "600",
              }}
            >
              George Fox's
            </span>{" "}
            premiere hackathon is back
            <br />
            <span id="">in-person!</span>
          </h1>

          <h1
            id="subtext_intro_2"
            style={{
              color: "black",
              fontWeight: "300",
              fontSize: "25px",
              marginTop: "30px",
            }}
          >
            Join more than <span id="">30 hackers</span> across the{" "}
            <span id="">community</span>
            <br /> to build the <span id="">next big thing</span>
          </h1>
          <h1
            id="date-text"
            style={{
              marginTop: "25px",
              fontSize: "20px",
              fontWeight: "600",
              color: "black",
              textAlign: "left",
            }}
          >
            March 10th - 12th, 2023 @ George Fox University
          </h1>
          <div className="buttonRow" style={ButtnGroup}>
            <a
              id="apply"
              className="mainButton applyLink-1"
              href="https://docs.google.com/forms/u/1/d/e/1FAIpQLScSowAjI15ieiIxyZtmxBx1fc8zigUzd13_zx1M8ET_Bf_fjg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "fit-content" }}
            >
              Apply Now

            </a>

            <a
              className="mainButton applyLink-2"
              href="mailto:acm.gfu@gmail.com?Subject=ACM%20Sponsorship%20Interest"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "fit-content" }}
            >
              Sponsor Code Jam
            </a>
          </div>
          <img
            src={codejam_text}
            alt="Code Jam Logo"
            className="codejam-text"
            style={{
              position: "absolute",
              right: "0",
              marginTop: "5%",
              marginRight: "15%",
            }}
          />
        </div>

        {/* <div className="rowC">
          <div id="date-text">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="/"
              className="apply-button"
              aria-disabled
            >
              Join the Board
            </a>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Home;
