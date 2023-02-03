import React from "react";
import Feature from '../../components/feature/Feature';
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Generative pretrained transformer" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Really cool chatbots are already there!" />
      <Feature title="Knowledgebase" text="It's super smart and stuff!" />
      <Feature title="Education" text="It's a better tool than Stack Overflow!" />
    </div>
  </div>
};

export default WhatGPT3;
