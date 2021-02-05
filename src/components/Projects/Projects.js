import React from 'react';
import dp from '../../assets/blog.jpg';
import Icon from '@material-ui/core/Icon'
import Pagination from '@material-ui/lab/Pagination';



const Projects = () => {

  return (
    <div className="container">
      <div className="content-row">
        <div className="column">
          <a href="/education" >
            <div className="card medium">
              <div className="card-image">
                <img src={dp} alt="" />
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                <Icon className="fab fa-node-js" style={{ fontSize: 30 }} />
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="/education" >
            <div className="card medium">
              <div className="card-image">
                <img src={dp} alt="" />
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                <Icon className="fab fa-node-js" style={{ fontSize: 30 }} />
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="/education" >
            <div className="card medium">
              <div className="card-image">
                <img src={dp} alt="" />
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                <Icon className="fab fa-node-js" style={{ fontSize: 30 }} />
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="/education" >
            <div className="card medium">
              <div className="card-image">
                <img src={dp} alt="" />
              </div>
              <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                <Icon className="fab fa-node-js" style={{ fontSize: 30 }} />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="pagination-row center-align">
          <Pagination count={10} className="" color="primary"  size="large"/>
      </div>
    </div>
  );
};




export default Projects;
