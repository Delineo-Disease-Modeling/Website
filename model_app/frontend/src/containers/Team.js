import React, { Component }  from 'react';

import leaders from '../const/leader.js';
import members from '../const/member.js';
import TeamGridList from '../components/TeamGridList.js'
import SupGridList from '../components/SupGridList.js'
import LeadGridList from '../components/LeaderGridList.js'
import { makeStyles } from '@material-ui/core/styles';
import TeamFilter from '../components/TeamFilter'
import FunctionClick from '../components/FunctionClick'
import Grid from '@material-ui/core/Grid';
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';



import './Team.css';


const Button = styled(MuiButton)(spacing);





  const styles = {
    root: {
      '& > *': {
        margin: 1,
      },
    },
    alignItemsAndJustifyContent: {
      width: 500,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
    },
    CardBackground: {
      backgroundColor: '#222629',
      height: '100%',
      width: '100vh',
      minHeight: '100%',
      minWidth: '100%',
      margin: 0,
      alignContent: 'center',
      paddingBottom: '5%',
    },
    MainHeader: {
      backgroundColor: '#222629',
      height: '100px',
      width: '100vh',

      minWidth: '100%',
      margin: 0,
      alignContent: 'center',

      paddingBottom: '20px'

    },
    h3: {
      color: 'white',
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: 0,

      width: 'fit-content',
      paddingBottom: 0,
      paddingTop: '20px',
      fontSize: '50px',


    }
  };


  class Team extends Component {

      render() {
          const { classes } = this.props;
  return(
    <div >


      <div className = {classes.MainHeader} align ='center' >
        <h3 className = {classes.h3} align="center" >Meet the Team</h3>

      </div>

      <div className = {classes.CardBackground}>
      <TeamFilter></TeamFilter>



   </div>

</div>
 );
}
}



export default withStyles(styles)(Team);
