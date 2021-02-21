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
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const TimelineWork = () => {
  const classes = useStyles();

  return (
    <Timeline align="left">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <LaptopMacIcon style={{ color: green[500] }}/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <h5>Developer Relations Engineer</h5>
            <h6>Jun 2019 - <strong>Present</strong></h6>
            <h6> <a href="https://www.linkedin.com/company/freshworks-inc" target="_blank" rel="noreferrer"> Freshworks Inc </a></h6>
            <h6><strong>Roles and Responsibilites</strong></h6>
            <Typography>
            <i className="fas fa-check"></i>  Develop and maintain CLIs and SDKs.
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i> 	Identify and create new developer tools based on the community needs
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i>  Actively Moderate the <a href="https://community.developers.freshworks.com/u/velmurugan/" target="_blank" rel="noreferrer">developer community</a> 
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i> Maintain Open Source respositories
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i> Plan and drive Early Access Programs for significant platform features. 
            </Typography> 
            <h6><strong>Accomplishments</strong></h6>
            <Typography>
            <i className="fas fa-check"></i>Created a metrics collection tool to collect and analyse Developer Realtion metrics across platforms like Discourse, Github, Newsletter, and developer portal.
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i> Planned and implemented Training Framework to onboard new developers of different skillset and experience levels to the platform. 
            </Typography> 
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
          <LaptopMacIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <h5>Programmer Analyst</h5>
            <h6>Jan 2016 - April 2019</h6>
            <h6><a href="https://www.linkedin.com/company/cognizant/" target="_blank" rel="noreferrer" >Cognizant Technology Solutions </a></h6>
            <h6><strong>Roles and Responsibilites</strong></h6>
            <Typography>
            <i className="fas fa-check"></i> Develop and maintain backend services and API for Adobe CMS
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i> Part of a technical committee responsible for testing, implementation and advocacy of new technologies to the team  
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i>  Design and plan component and API development. 
            </Typography> 
            <h6><strong>Accomplishments</strong></h6>
            <Typography>
            <i className="fas fa-check"></i> Led a team of 5 on Adobe platform upgrade 
            </Typography> 
            <Typography>
            <i className="fas fa-check"></i> Integrated a complete devops solution into the existing CMS pipeline
            </Typography> 
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

  );
};

export default TimelineWork;

