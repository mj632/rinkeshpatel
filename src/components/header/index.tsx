import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    navTag: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    navName: {
      padding: '10px 15px',
      cursor: 'pointer'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'red'
    },
    navigationBar: {
      backgroundColor: 'transparent'
    },
    title: {
      flexGrow: 1,
      color: 'red'
    }
  })
);

function Header() { 
  const classes = useStyles();
  return(<>
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.navTag}>
          <Link to="home" spy={true} smooth={true} offset={0} duration={500} className={classes.navName}>
            Home
          </Link>
          <Link to="about" spy={true} smooth={true} offset={0} duration={500} className={classes.navName}>
            About
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  </>);
}

export default Header;