import React from "react";

import { Feature } from '../../components';
import "./features.css";

const featuresData = [
  {
    title: 'Super responsive',
    text: 'Absolutely super amazing text that is there to replace a generic lorem ipsum'
  },
  {
    title: 'Frontend is my passion',
    text: 'Absolutely super amazing text that is there to replace a generic lorem ipsum'
  },
  {
    title: 'Best regards',
    text: 'Absolutely super amazing text that is there to replace a generic lorem ipsum'
  },
  {
    title: 'Amazing functionalities',
    text: 'Absolutely super amazing text that is there to replace a generic lorem ipsum'
  }
];

const Features = () => {
  return <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The future is now and You just need to realize it. Step into the future today & make it happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((feature, index) => <Feature key={index + feature.title} title={feature.title} text={feature.text} />)}
    </div>
  </div>;
};

export default Features;
