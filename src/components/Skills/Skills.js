import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Icon from '@material-ui/core/Icon'


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
            <Icon className="fab fa-node-js" style={{ color: '#70bfe6',fontSize: 25 }} />
          </span>
          HTML
          </p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>Skill name</p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>

      <div className="column">
        <p>Skill name</p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
      <div className="column">
        <p>Skill name</p>
        <BorderLinearProgress variant="determinate" value={75} />
      </div>
    </div>
  );
};




export default Skills;
