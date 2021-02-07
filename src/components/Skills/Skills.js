import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Icon from '@material-ui/core/Icon'
import mongo from '../../assets/mongodb.svg';
import postgres from '../../assets/postgresql.svg'
import heroku from '../../assets/heroku.svg'

const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: '#aaa'
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#70bfe6',
  },
}))(LinearProgress);

const Skills = () => {
  return (
    <div className="container content-row">
      <div className="column">
        <p>
          <span className="">
            <Icon className="fab fa-html5" style={{ color: '#f06529', fontSize: 35 }} />
            <Icon className="fab fa-css3" style={{ color: 'dodgerblue', fontSize: 35 }} />
          </span>
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <Icon className="fab fa-node" style={{ color: '#43853d', fontSize: 35, width: '50px' }} />
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <span className="">
            <Icon className="fab fa-react" style={{ color: '#61dafb', fontSize: 35, width: '50px' }} />
          </span>
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <span className="">
            <Icon className="fab fa-angular" style={{ color: 'red', fontSize: 35 }} />
          </span>
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <span className="">
            <Icon className="fab fa-vuejs" style={{ color: '#42b983', fontSize: 35 }} />
          </span>
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <Icon className="fab fa-java" style={{ color: '#f06529', fontSize: 35, width: '50px' }} />
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <span className="">
            <Icon className="fab fa-linux" style={{ fontSize: 35 }} />
          </span>
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <span className="">
            <Icon className="fab fa-jenkins" style={{ fontSize: 35 }} />
          </span>
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <Icon className="fab fa-docker" style={{ color: '#007bff', fontSize: 35, width: '50px' }} />
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <Icon className="fab fa-aws" style={{ color: '#f06529', fontSize: 35, width: '50px' }} />
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <span className="">
            <img src={mongo} alt="" style={{ color: '#f06529', fontSize: 35, width: '50px', height: '30px' }} />
          </span>
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <span className="">
            <img src={postgres} alt="" style={{ color: '#f06529', width: '50px', height: '30px' }} />
          </span>
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>
          <span className="">
            <img src={heroku} alt="" style={{ color: '#f06529', width: '50px', height: '30px' }} />
          </span>
        </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
    </div>
  );
};




export default Skills;
