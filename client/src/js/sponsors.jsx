import React from "react";
import buildingImage from "../png/BuildingOnly.png";

const SPONSORS = {
  biggest: [
    {
      link: "https://silverpine.com",
      img: require("../sponsor-logos/silverpine.png"),
    },
  ],
  big: [
    {
      link: "https://cs.georgefox.edu/faculty",
      img: require("../sponsor-logos/georgefox.png"),
    },
    {
      link: "https://www.georgefox.edu/offices/student-government/index.html",
      img: require("../sponsor-logos/asc.png"),
    },
  ]
};

const _makeSponsors = function (key) {
  return (
    <div className={`level level-${key}`}>
      {SPONSORS[key].map((sponsor) => (
        <a
          id="gov"
          href={sponsor["link"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img key={sponsor["img"]} src={sponsor["img"]} alt="sponsor" />
        </a>
      ))}
    </div>
  );
};

function Sponsors() {
  return (
    <div id="sponsors" className="container">
      <h1 className="section-heading" id="sub-heading">
        Sponsors
      </h1>

      <div id="building">
        <img className="building" src={buildingImage} alt="sky building" />
      </div>

      {_makeSponsors("biggest")}
      {_makeSponsors("big")}
      {/* {_makeSponsors("medium")} */}
      {/* {_makeSponsors("small")}
      {_makeSponsors("smallest")} */}
      {/* {_makeSponsors("tiny")} */}

      <a
        href="mailto:acm.gfu@gmail.com?Subject=ACM%20Sponsorship%20Interest"
        className="apply-button"
      >
        Interested in sponsoring?
      </a>
    </div>
  );
}

export default Sponsors;
