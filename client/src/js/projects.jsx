import React from "react";
import { projects } from "./content.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const PROJECT_INTERVAL = 2500;
const colors = ["#1e5398", "#1e5398", "#1e5398", "#1e5398"];

function makeColors() {
  var arr = [];
  while (arr.length < colors.length && arr.length !== projects.length) {
    var r = Math.floor(Math.random() * projects.length);
    if (arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

function Projects() {
  return (
    <div id="projects">
      <h1 className="section-heading">Past Code Jams</h1>
      <ProjectSlider />
    </div>
  );
}

class ProjectSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr: [], width: 0 };
  }

  componentWillMount() {
    this.setState({ arr: makeColors() });
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    var numSlides = 3;
    if (window.innerWidth < 768.68) {
      numSlides = 1;
    }
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: numSlides,
      swipeToSlide: true,
      focusOnSelect: true,
      speed: 500,
    };
    return (
      <div className="project-card">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          {projects.map((project, i) => {
            const color = colors[i % 3];
            return (
              <GridItem
                color={color}
                title={project.title}
                text={project.description}
                url={project.url}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

class GridItem extends React.Component {

  render() {
    return (
      <div
        key={this.props.title}
        className="grid-item"
        style={{ backgroundColor: this.props.color }}
        onClick={this.props.onClick}
      >
        <p className="title">{this.props.title}</p>
        <p className="text">{this.props.text}</p>
        {this.props.url && (
          <p style={{ width: "100%", marginBottom: "5%" }}>
            <a className="url arrowlink" href={this.props.url}>
              View more
            </a>
          </p>
        )}
      </div>
    );
  }
}

export default Projects;
