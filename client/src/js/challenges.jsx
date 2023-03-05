import React from 'react';
import {challenges, challenges_intro} from './content.json';

function Challenges() {
  return(
    <div id="challenges">
      <div className="stripe accent-orange"/>
      <h1 className="section-heading">Tracks</h1>
      <div className="section-intro">{challenges_intro}</div>
      <div className="container">
        {challenges.map((challenge, i) => {
          return <Challenge name={challenge.name} logo={challenge.logo} description={challenge.description} key={i} />
        })}
      </div>
    </div>
  );
}

function Challenge(props) {
  return(
    <div className="challenge">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default Challenges;
