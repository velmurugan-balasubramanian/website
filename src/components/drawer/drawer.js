import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import dp from '../../assets/dp.jpg';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  colorPrimary: {
    backgroundColor: '#aaa'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    colorPrimary: {
      backgroundColor: '#aaa'
    }
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    colorPrimary: {
      backgroundColor: '#aaa'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })} style={{ backgroundColor: '#00b0f0', fontSize: 50 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Velmurugan
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <div className="display-picture">
          <a href="/">
            <img className="image" src={dp} alt=""></img>
          </a>
        </div>
        <Divider />
        <List className="nav-menu">

          <NavLink onClick={handleDrawerClose} to="/" exact>
            <ListItem button key="Home">
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>

          <NavLink onClick={handleDrawerClose} to="/about" >
            <ListItem button key="About">
              <ListItemText primary="About" />
            </ListItem>
          </NavLink>
          <NavLink onClick={handleDrawerClose} to="/skills" >
            <ListItem button key="Skills">
              <ListItemText primary="Skills" />
            </ListItem>
          </NavLink>
          <NavLink onClick={handleDrawerClose} to="/education" >
            <ListItem button key="Education">
              <ListItemText primary="Education" />
            </ListItem>
          </NavLink>
          <NavLink onClick={handleDrawerClose} to="/work" >
            <ListItem button key="Work">
              <ListItemText primary="Work" />
            </ListItem>
          </NavLink>
          <NavLink onClick={handleDrawerClose} to="/projects" >
            <ListItem button key="Projects">
              <ListItemText primary="Projects" />
            </ListItem>
          </NavLink>
          <NavLink onClick={handleDrawerClose} to="/blog" >
            <ListItem button key="Blog">
              <ListItemText primary="Blog" />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
} 