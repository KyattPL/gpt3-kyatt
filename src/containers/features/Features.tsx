import React from "react";
import Feature from '../../components/feature/Feature';
import "./features.css";

const featuresData = [
  {
    title: 'On a stack no cap',
    text: 'He be buggin fr fr'
  },
  {
    title: 'Whatever dud',
    text: 'mgaoigneoigioaenrgioaenrgio'
  },
  {
    title: 'Omegalul Jankos Nidalee',
    text: 'KEKW Q KEKW Q'
  },
  {
    title: 'Hey Kappa Kappa Hey',
    text: 'Bro why is this song stuck in my head'
  }
];

const Features = () => {
  return <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The future is now and You just need to realize it. Step into future today & make it happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((feature, index) => <Feature key={index + feature.title} title={feature.title} text={feature.text} />)}
    </div>
  </div>;
};

export default Features;
