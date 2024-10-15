import React from 'react';
import './about.scss';
import logo from '../../graphics/images/logo.svg'
import SphereBackground from '../../components/bg/SphereBackground';
const About = () => {
  return (
    <div className="about">
      
      <div className="about-container">
        <SphereBackground/>
        <div className="about-container__box box1">
          <img src={logo} alt="" className="about-container__box-img" />
        </div>
        <div className="about-container__box box2">AWWWDDE</div>
        <div className="about-container__box box3">Skills</div>
        <div className="about-container__box box4">About</div>
        <div className="about-container__box box5">gif</div>
        <div className="about-container__box box6">Links</div>
        <div className="about-container__box box7">Education</div>
        <div className="about-container__box box8">Portfolio</div>
        <div className="about-container__box box9">Contact</div>
      </div>
    </div>
  );
};

export default About;