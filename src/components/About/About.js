import React from 'react';
import PropTypes from 'prop-types';
import './About.css';
import dp from '../../assets/blog.jpg';
import about from '../../assets/about.JPG';
import Icon from '@material-ui/core/Icon'
import Pagination from '@material-ui/lab/Pagination';

const About = () => {
  return (
    <div className="container">
      <div className="content-row">
        <h3>About Me</h3>
        <div className="column">
          <img src={about} className="responsive-image" />
        </div>
        <div className="column">
        </div>
      </div>
    </div>
  );
};


About.propTypes = {

};


export default About;
