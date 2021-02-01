import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Fab } from '@material-ui/core';
import TuneIcon from '@material-ui/icons/Tune';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 400,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'fixed',
    right: theme.spacing(4),
    zIndex: 99,
    color: theme.palette.common.black,
    backgroundColor: 'cyan',
    '&:hover': {
      backgroundColor: '#0fe0e0',
    },
  },
  drawer: {
    top: 90,
    height: "90%"
  }
}));

export default function ConfigDrawer(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    runFABExtended: false,
    configFABExtended: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  return (
    <div>
      <React.Fragment key='left'>
          <Fab variant="extended" className={classes.fab} style={{'bottom': '40px'}} onClick={props.runOnClick}>
            <PlayArrowIcon /> Run Simulation 
          </Fab>
          <Fab variant="extended" className={classes.fab} onClick={toggleDrawer('left', true)} style={{'bottom': '100px'}}>
            <TuneIcon /> Configurations 
          </Fab>
          <SwipeableDrawer
            anchor='left'
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
            className={classes.drawer}
          >
            {props.children[1].props.children}
          </SwipeableDrawer>
          <div>
            {props.children[0].props.children}
          </div>
          <div>
            {props.children[2].props.children}
          </div>
        </React.Fragment>
      ))
    </div>
  );
}
