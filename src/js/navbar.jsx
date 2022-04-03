import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ended_cutoff, live_cutoff } from './content.json';

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
          <li className="navbar-item"><AnchorLink offset='100' id="home-tab" href="#home">home</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#team">our board</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#challenges">innovation</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' href="#faq">code jam faq</AnchorLink></li>
          <li className="navbar-item"><AnchorLink offset='100' id="sponsors-tab" href="#sponsors">sponsors</AnchorLink></li>
          {/* <li className="navbar-item"><a rel="noopener noreferrer" target="_blank" href="https://docs.google.com/document/d/1M8zvvi8l1tHGwsP7SqJa6EcpBKD2WcZem9O0riDhelE/edit?usp=sharing">more info</a></li> */}
          {/* {Date.now() > new Date(ended_cutoff) ?
              <li className="apply-link register-btn-ext navbar-item" title="Live dashboard"><a rel="noopener noreferrer" target="_blank" href="https://live.foxacmw.com">live schedule</a></li>
              :
              <li className="apply-link register-btn-ext navbar-item" title="Applications open now"><a rel="noopener noreferrer" target="_blank" href="https://forms.gle/ofdWQXiNjAdkSRzs7">register now</a></li>
          }  */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
