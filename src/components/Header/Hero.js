import React from 'react';
import './Style.css';
import phoneMockup from '../images/hero-img.png';
import { FaGooglePlay, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="content-container">
        <h2 className="heading">
          Clean Clothes
        </h2>
        <p className="subheading">
          Download our app and get your laundry done with a tap of a button.
        </p>
        <p className="description">
        Clean Clothes is a laundry service app that allows you to order laundry pickup and delivery with just a few taps on your phone. Say goodbye to the hassle of doing laundry yourself and let Clean Clothes take care of it for you.
        </p>
        <div className="button-container">
          <a href="#" className="button"><FaGooglePlay /> Google Play</a>
          <a href="https://github.com/ArfahAli/Clean-Clothes-LaundaryApp" className="button"><FaGithub /> GitHub</a>
        </div>
      </div>
      <div className="image-container">
        <img src={phoneMockup} alt="Phone Mockup" />
      </div>
    </div>
  );
};

export default Hero;
