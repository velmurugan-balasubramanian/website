import React from 'react';
import './About.css';
import about from '../../assets/about.JPG';

const About = () => {
  return (
    <div className="container">
      <div className="content-row">
        <h3>About Me</h3>
        <div className="column">
          <img src={about} alt="" className="responsive-image" />
        </div>
        <div className="column">
          Hey there :)
        </div>
      </div>
    </div>
  );
};




export default About;
