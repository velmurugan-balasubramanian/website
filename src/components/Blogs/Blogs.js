import React from 'react';
import './Blogs.css';
import skills from '../../assets/Skills.png'
import Pagination from '@material-ui/lab/Pagination';
import Chip from '@material-ui/core/Chip';



const Blogs = () => {
  return (
    <div className="container">
      <div className="content-row">
        <div className="column">
          <a href="https://medium.com/freshworks-developer-blog/how-we-used-google-codelabs-to-kickstart-developer-training-9d1703a01b92" target="_blank" rel="noreferrer">
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt="" />
              </div>
              <div className="card-content">
                <p>
                  <Chip
                    variant="outlined"
                    size="small"
                    style={{ backgroundColor: '#00b0f0' }}
                    label="Blog"
                  />
                </p>
                <br />
                <h6>How We Used Google Codelabs To Kickstart Developer Training</h6>
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="https://community.developers.freshworks.com/t/debugging-serverless-apps-using-vscode-and-nodejs-debugger/1128" target="_blank" rel="noreferrer">
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt="" />
              </div>
              <div className="card-content">
                <p>
                  <Chip
                    variant="outlined"
                    size="small"
                    style={{ backgroundColor: '#00b0f0' }}
                    label="Blog"
                  />
                  <Chip
                    variant="outlined"
                    size="small"
                    style={{ backgroundColor: '#FA9635'}}
                    label="Wiki"
                  />
                </p>
                <br />
                <h6>Debugging Serverless apps using VSCode and Nodejs Debugger</h6>
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="https://developers.freshworks.com/tutorials/codelabs/freshdesk-basics/index.html" target="_blank" rel="noreferrer">
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt="" />
              </div>
              <div className="card-content">
                <p>
                    <Chip
                      variant="outlined"
                      size="small"
                      style={{ backgroundColor: '#f8df00' }}
                      label="Tutorial"
                    />
                </p>
                <br />
                <h6>Build your first Freshworks app in Freshworks developer platform</h6>
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="https://developers.freshworks.com/tutorials/codelabs/freshdesk-advanced/index.html" target="_blank" rel="noreferrer">
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt="" />
              </div>
              <div className="card-content">
                <p>
                    <Chip
                      variant="outlined"
                      size="small"
                      style={{ backgroundColor: '#f8df00' }}
                      label="Tutorial"
                    />
                </p>
                <br />
                <h6>Simple GitHub integration using OAuth, Data Storage, Notifications</h6>
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="https://developers.freshworks.com/tutorials/codelabs/fdk-tests/index.html" target="_blank" rel="noreferrer">
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt="" />
              </div>
              <div className="card-content">
                <p>
                    <Chip
                      variant="outlined"
                      size="small"
                      style={{ backgroundColor: '#f8df00' }}
                      label="Tutorial"
                    />
                </p>
                <br />
                <h6>Introduction To Unit Tests For Serverless Apps</h6>
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="https://developers.freshworks.com/tutorials/codelabs/freshdesk-advanced/index.html" target="_blank" rel="noreferrer">
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt="" />
              </div>
              <div className="card-content">
                <p>
                    <Chip
                      variant="outlined"
                      size="small"
                      style={{ backgroundColor: '#f8df00' }}
                      label="Tutorial"
                    />
                </p>
                <br />
                <h6>Simple GitHub integration using OAuth, Data Storage, Notifications</h6>
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


export default Blogs;
