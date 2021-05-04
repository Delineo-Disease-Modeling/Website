import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
//import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
		fontWeight: 'normal',
		letterSpacing: '1.2px',
    maxWidth: '80%',
    minWidth: '50%',
    color: '#222629'
	},
  link: {
    minWidth: '10%',
  },
  border: {
		width: '150px',
		margin: 'auto',
		borderTop: '3px solid #66FCF1',
		marginBottom: '50px'
	},
}));

const TeamApplication = function TeamApplication() {

  const classes = useStyles();

  return (
      <Card style={{ justifyContent: 'center', padding: '30px 15%', backgroundColor: 'white' }}>

        <Box py={2} bgcolor="white" style={{ color: "#222629" }} align="center" >
        <Typography variant="h3" component="h3" className={classes.title}>
						JOIN TEAM
					</Typography>
					<div className={classes.border}></div>

          
          <Typography align="center" variant="h5" component="h5" className={classes.title}>
						If you are a current student at Johns Hopkins University 
            and are interested in joining our team, send us an email at
            <a href="mailto:delineodiseasemodeling@gmail.com?subject=Intrested Student"> delineodiseasemodeling@gmail.com </a> 
            along with your resume and 
            area of interest.
          </Typography>
          
        </Box>
      </Card>
  )
}
export default TeamApplication;