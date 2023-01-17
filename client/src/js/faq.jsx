import React from "react";
import { faq } from "./content.json";

const plusList = [require("../svg/2021/faq1.svg")];

const FAQItem = ({ q, a, link, textBefore, textIn, textAfter, i }) => {
  return (
    <div className="faq-item" key={q + a}>
      <h2 className="section-subheading faq-question">
        <img
          alt="faq plus"
          className="faq-plus"
          src={plusList[i % plusList.length]}
          style={{ height: 30 }}
        />
        {q}
      </h2>
      <p className="faq-answer">
        {link ? (
          <>
            {textBefore}
            <a href={link}>{textIn}</a>
            {textAfter}
          </>
        ) : (
          a
        )}
      </p>
    </div>
  );
};

const FAQ = () => {
  return (
    <div id="faq">
      <h1 className="section-heading">code jam faq</h1>
      <div className="faq-container">
        {faq.map((item, i) => (
          <FAQItem {...item} i={i} />
        ))}
      </div>
      <br />
    </div>
  );
};

export default FAQ;
