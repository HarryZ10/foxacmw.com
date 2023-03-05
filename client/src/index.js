import React from "react";
import ReactDOM from "react-dom";
// import { Auth0Provider } from "@auth0/auth0-react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Navbar from "./js/navbar.jsx";
import Home from "./js/home.jsx";
// import About from "./js/about.jsx";
import Projects from "./js/projects.jsx";
import FAQ from "./js/faq.jsx";
import Sponsors from "./js/sponsors.jsx";
import Challenges from "./js/challenges.jsx";
// import Team from "./js/team.jsx";

import "./favicons/favicons";
import "./index.scss";

function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <About /> */}
      {/* <Team /> */}
      <Challenges />
      <FAQ />
      <Projects />
      <Sponsors />
    </div>
  );
}

function CustomRedirect({ from, to }) {
  return (
    <Route
      exact
      path={from}
      component={() => {
        window.location = to;
        return null;
      }}
    />
  );
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <CustomRedirect
            from="/code-of-conduct"
            to="https://github.com/HarryZ10/website/blob/website-2022/CODE-OF-CONDUCT"
          />
          <CustomRedirect
            from="/privacy-policy"
            to="https://github.com/HarryZ10/website/blob/website-2022/PRIVACY-POLICY.md"
          />
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/our-board" component={Team} /> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
