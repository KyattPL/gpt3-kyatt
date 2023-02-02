import React from "react";
import "./header.css";
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
  return <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's build something amazing with GPT-3</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quia minus amet accusantium. Quod, quas deleniti. Fugit officia nulla, veritatis earum quisquam sed odit iusto perferendis dicta amet, velit voluptatum.</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} alt="Registered users" />
        <p>1,600 people have signed up in the last 24 hours</p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} alt="AI head" />
    </div>
  </div>
};

export default Header;
