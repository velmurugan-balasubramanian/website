import React from 'react';
import './Blogs.css';
// import dp from '../../assets/img.png';
import skills from '../../assets/Skills.png'
import Icon from '@material-ui/core/Icon'
import Pagination from '@material-ui/lab/Pagination';

const Blogs = () => {
  return (
    <div className="container">
      <div className="content-row">
        <div className="column">
          <a href="/education" >
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt="" />
              </div>
              <div className="card-content">
                <p>.</p>
                <Icon className="fab fa-node-js" style={{ fontSize: 30 }} />
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="/education" >
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt=""/>
              </div>
              <div className="card-content">
                <p></p>
                <Icon className="fab fa-node-js" style={{ fontSize: 30 }} />
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="/education" >
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt="" />
              </div>
              <div className="card-content">
                <p></p>
                <Icon className="fab fa-node-js" style={{ fontSize: 30 }} />
              </div>
            </div>
          </a>
        </div>
        <div className="column">
          <a href="/education" >
            <div className="card medium">
              <div className="card-image">
                <img src={skills} alt="" />
              </div>
              <div className="card-content">
                <p></p>
                <Icon className="fab fa-node-js" style={{ fontSize: 30 }} />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="pagination-row center-align">
          <Pagination count={1} className="" color="primary"  size="large"/>
      </div>
    </div>
  );
};


export default Blogs;
