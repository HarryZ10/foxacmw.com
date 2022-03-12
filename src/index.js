import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./js/navbar.jsx";
import Home from "./js/home.jsx";
import About from "./js/about.jsx";
import Projects from "./js/projects.jsx";
import FAQ from "./js/faq.jsx";
import Sponsors from "./js/sponsors.jsx";
import Challenges from "./js/challenges.jsx";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./favicons/favicons";
import "./index.scss";

function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
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
    <Router>
      <Switch>
        {/* <CustomRedirect
          from="/slack"
          to="https://join.slack.com/t/treehacks-2019/shared_invite/enQtNTE5ODY0MDI2NjQ3LWI2YjhlYTU3OTE1ODcyMTdmZWYzYWVjY2NjNzQ2YTBiZDY5YWYwYzhkMDhlZTBmNmNmMzMzZWYxM2QwMTMxMmI"
        />}*/}

        <CustomRedirect
          from="/sponsors"
          to="https://forms.gle/EMv7CcD2MxFEh6RUA"
        />
        <CustomRedirect
          from="/code-of-conduct"
          to="https://github.com/HarryZ10/website/blob/website-2022/CODE-OF-CONDUCT"
        />
        <CustomRedirect
          from="/privacy-policy"
          to="https://github.com/HarryZ10/website/blob/website-2022/PRIVACY-POLICY.md"
        />
        <Route exact path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
