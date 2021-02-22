import React from 'react';
import Icon from '@material-ui/core/Icon'


const Home = () => {
  return (
    <div className="home center-align">
      <h3 className="">Hey, My name is <span style={{ color: '#00b0f0' }} >Vel</span>Murugan</h3>
      <p>I work as a Developer Relations Engineer at Freshworks Inc </p>
      <p>
        <a className="padding-left" href="https://twitter.com/velmurugan2411" rel="noreferrer" target="_blank" >
          <Icon className="fab fa-twitter" style={{ fontSize: 30 }} />
        </a>
        <a className="padding-left" href="https://www.linkedin.com/in/velmurugan7/" rel="noreferrer" target="_blank">
          <Icon className="fab fa-linkedin" style={{ fontSize: 30 }} />
        </a>
        <a className="padding-left" href="https://github.com/velmurugan-balasubramanian" rel="noreferrer" target="_blank">
          <Icon className="fab fa-github" style={{ fontSize: 30 }} />
        </a>
      </p>
    </div>
  );
};



export default Home;
