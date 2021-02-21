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
        <div className="column" style={{fontSize:"15pt"}}>
          <p>
          I am a Developer Advocate with about five years of experience in Developer Evangelism and Software Engineering. Currently, I work with the Developer Relations team at Freshworks. My day to day work involves actively provisioning engineering solutions for developer problems through SDKs, CLIs, and APIs and moderating our developer community.
          </p>

          <p>I plan and drive early access programs for some of our significant features in the pre-launch stage. I work on curating the developer experience for people and teams working with our platform through well crafted tutorials and trainings.
          </p>

          <p>
          I have a keen interest in open source advocacy and co-own our platform's open source initiatives and repos.
          </p>

        </div>
      </div>
    </div>
  );
};




export default About;
