import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  }
}));

const TimelineEducation = () => {
  
  const classes = useStyles()
  return (
    <Timeline align="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          <Icon className="fas fa-user-graduate" />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <h5>Bachelor of Engineering</h5>
            <h6>Computer Science Engineering</h6>
            <h6><strong>Subjects covered</strong></h6>
            <Typography>
            <i className="fas fa-check"></i>  Software Engineering
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i>  Software Project Management
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i>  User Interface Design
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i>  Object Oriented design and Analysis
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i>  Object Oriented Programming
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i>  Advanced Mathematics
            </Typography> 
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          <Icon className="fas fa-school" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <h5>Higher Secondary</h5>
            <h6>Computer Science</h6>
            <h6><strong>Subjects covered</strong></h6>
            <Typography>
            <i className="fas fa-check"></i>  C programming
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i>  HTML and CSS
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i>  JavaScript
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i> Mathematics
            </Typography> 
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};


export default TimelineEducation;
