import React from "react";
import styled from "styled-components";
import codejam_text from "../png/LogoOnly.png";

const Button = styled.button`
  background: linear-gradient(86.93deg, #004f94 2.37%, #205e93 106.02%);
  border-radius: 10px;
  color: white;
  border: transparent;
  padding: 15px;
  font-size: 15px;
  font-weight: 400;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 20px;
  margin-top: 20px;
  font-family: Poppins;
  width: fit-content;
  &:hover {
    box-shadow: 0px 0px 15px 0px #e4e4e4;
    transform: scale(1.1);
    background-color: #fff;
    cursor: pointer;
  }
  transition: 0.2s all;
`;

const SponsorButton = styled.button`
  background: linear-gradient(86.93deg, #004f94 2.37%, #205e93 106.02%);
  border-radius: 10px;
  color: white;
  border: transparent;
  padding: 15px;
  font-weight: 400;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 20px;
  font-size: 15px;
  &:hover {
    box-shadow: 0px 0px 15px 0px #e4e4e4;
    transform: scale(1.1);
    background-color: #fff;
  }
  transition: 0.2s all;
  cursor: pointer;
  font-family: Poppins;
  width: fit-content;
`;

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
              href="https://docs.google.com/forms/u/1/d/e/1FAIpQLScSowAjI15ieiIxyZtmxBx1fc8zigUzd13_zx1M8ET_Bf_fjg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "fit-content" }}
            >
              <Button className="applyNow">Apply Now</Button>
            </a>

            <a
              href="mailto:acm.gfu@gmail.com?Subject=ACM%20Sponsorship%20Interest"
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "fit-content" }}
            >
              <SponsorButton className="sponsorNow">
                Sponsor Code Jam
              </SponsorButton>
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
