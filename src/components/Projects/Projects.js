import React from 'react';
import slack from '../../assets/slack-dark.png';
import crayons from '../../assets/crayons.svg';
import neo from '../../assets/neo-dark.png'
import site from '../../assets/platform-site.png'
// import Icon from '@material-ui/core/Icon'
import Pagination from '@material-ui/lab/Pagination';
import Chip from '@material-ui/core/Chip';



const Projects = () => {

  return (
    <div className="container">
      <div className="content-row">
        <div className="column">
          <a href="/projects" >
            <div className="card large">
              <div className="card-image">
                <img src={slack} alt="" width="80" height="210" />
              </div>
              <div className="card-content">
                <p><strong>Discourse Community topic assigment automation</strong></p>
                <p>
                  A tool written in javascript to Assign a new topic to a moderarator based on their interests and preferences.  The tool also sends the assignee a message on assigment of a new topic and a reminder after a user set time in slack
                </p>
              </div>
              <div class="card-action" style={{ fontSize: '15pt' }}>
                <Chip
                  variant="outlined"
                  size="small"
                  style={{ backgroundColor: '#FA9635' }}
                  label="Private"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="https://crayons.freshworks.com/" target="_blank" rel="noreferrer">
            <div className="card large">
              <div className="card-image">
                <img src={crayons} alt="" style={{ height: '210px' }} />
              </div>
              <div className="card-content">
                <p><strong>Crayons</strong></p>
                <p>Crayons is an Open Source of web component library, designed with Freshworks design language in mind, Crayons helps the Freshworks app developer to align with the product in terms of the design</p>
              </div>
              <div class="card-action" style={{ fontSize: '15pt' }}>
                <Chip
                  variant="outlined"
                  size="small"
                  style={{ backgroundColor: '#00FF00' }}
                  label="Open Source"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="/projects" target="_blank" rel="noreferrer" >
            <div className="card large">
              <div className="card-image">
                <img src={neo} alt="" style={{ height: '240px' }} />
              </div>
              <div className="card-content">
                <p><strong>FDK</strong></p>
                <p> Freshworks Development Kit is a combination of a CLI and SDK, which helps the developers to create, develop, and test Freshworks app locally</p>
              </div>
              <div class="card-action" style={{ fontSize: '15pt' }}>
              <Chip
                  variant="outlined"
                  size="small"
                  style={{ backgroundColor: '#FA9635' }}
                  label="Private"
                />
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="http://developer.freshworks.com" target="_blank" rel="noreferrer">
            <div className="card large">
              <div className="card-image">
                <img src={site} alt="" />
              </div>
              <div className="card-content">
                <p><strong>developer.freshworks.com</strong></p>
                <p>
                  Freshworks developer platform site is built using gatsby with an automated API documnetation generator plugin which merges auto generated API...
                </p>
              </div>
              <div class="card-action" style={{ fontSize: '15pt' }}>
              <Chip
                  variant="outlined"
                  size="small"
                  style={{ backgroundColor: '#FA9635' }}
                  label="Private"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="pagination-row center-align">
        <Pagination count={1} className="" color="primary" size="large" />
      </div>
    </div>
  );
};




export default Projects;
