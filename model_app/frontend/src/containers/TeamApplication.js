import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TeamMemberJoin from '../images/teammemberjoin.jpg'

const useStyles = makeStyles((theme) => ({
  title: {
		fontWeight: 'normal',
		letterSpacing: '1.2px',
    color: '#222629'
	},
  border: {
		width: '150px',
		margin: 'auto',
		borderTop: '3px solid #66FCF1',
		marginBottom: '50px'
	},
  teamPage: {
    backgroundSize: "cover",
    height: "130vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0.85",
    boxShadow: "inset 0 0 0 100vw rgba(0,0,0,0.5)",
},
}));

const TeamApplication = function TeamApplication() {

  const classes = useStyles();

  return (
      <Card className={classes.teamPage} style={{ justifyContent: 'center', padding: '30px 15%', backgroundColor: 'white', backgroundImage:`url(${TeamMemberJoin})` }}>

        <Box py={2} bgcolor="white" style={{ color: "#222629" }} align="center" >
        <Typography variant="h3" component="h3" className={classes.title}>
						JOIN OUR TEAM
					</Typography>
					<div className={classes.border}></div>


          <Typography variant="h5" component="h5" className={classes.title}>
						If you are a Hopkins student and are interested in joining our team. </Typography>
          <Typography variant="h5" component="h5" className={classes.title}>
          Send us an email at delineodiseasemodeling@gmail.com with your resume and interested team(Fullstack, Simulation, Machine learning, Information Support)
					</Typography>
        </Box>
      </Card>
  )
}
export default TeamApplication;