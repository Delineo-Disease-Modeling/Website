import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import StyledButton from '../components/StyledButton';
import Card from '@material-ui/core/Card';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
}));

const TeamApplication = function TeamApplication() {

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [major, setMajor] = useState("");

  const [grad_year, setGrad_year] = useState("");

  const [first_interested_team, setFirst_interested_team] = useState("");
  const [second_interested_team, setSecond_interested_team] = useState("");
  const [third_interested_team, setThird_interested_team] = useState("");
  const [submitMsg, setSubmitMsg] = useState("")
  const classes = useStyles();

  return (
    <Container style={{ padding: '30px 20%', backgroundColor: '#66FCF1', margin: '0' }}>
      <Card style={{ justifyContent: 'center', padding: '30px 15%', backgroundColor: 'white' }}>

        <Box py={2} bgcolor="white" style={{ color: "#222629" }} align="center" >
        <Typography variant="h3" component="h3" className={classes.title}>
						JOIN TEAM
					</Typography>
					<div className={classes.border}></div>

          <form noValidate autoComplete="on">
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                <Typography >
                  First Name
                </Typography>
                <TextField required id="standard-required" variant="outlined" label="First Name" onChange={e => setFirst_name(e.target.value)} />
              </Grid>
              <Grid item>
                <Typography >
                  Last Name
                </Typography>
                <TextField required id="standard-basic" variant="outlined" label="Last Name" onChange={e => setLast_name(e.target.value)} />
              </Grid>

              <Grid item>
                <Typography >
                  Major
                </Typography>
                <TextField required id="standard-basic" variant="outlined" label="Major" onChange={e => setMajor(e.target.value)} />
              </Grid>
              <Grid item>
                <Typography  >
                  Graduation Year
                </Typography>
                <TextField required id="standard-basic" variant="outlined" label="Graduation Year" onChange={e => setGrad_year(e.target.value)} />
              </Grid>

              <Grid item>
                <Typography>First Choice Team</Typography>
                <Select
                  onChange={(e) => {
                    setFirst_interested_team(e.target.value);
                  }}
                  style={{ minWidth: "230px" }}
                >
                  <MenuItem value="Fullstack" style={{ backgroundColor: "white" }}>Fullstack</MenuItem>
                  <MenuItem value="Simulation" style={{ backgroundColor: "white" }}>Simulation</MenuItem>
                  <MenuItem value="Machine learning" style={{ backgroundColor: "white" }}>Machine learning</MenuItem>
                  <MenuItem value="Information Support" style={{ backgroundColor: "white" }}>Information Support</MenuItem>
                </Select>


              </Grid>

              <Grid item>
                <Typography>Second Choice Team</Typography>
                <Select
                  onChange={(e) => {
                    setSecond_interested_team(e.target.value);
                  }}
                  style={{ minWidth: "230px" }}
                >
                  <MenuItem value="Fullstack" style={{ backgroundColor: "white" }}>Fullstack</MenuItem>
                  <MenuItem value="Simulation" style={{ backgroundColor: "white" }}>Simulation</MenuItem>
                  <MenuItem value="Machine learning" style={{ backgroundColor: "white" }}>Machine learning</MenuItem>
                  <MenuItem value="Information Support" style={{ backgroundColor: "white" }}>Information Support</MenuItem>
                  <MenuItem value="None" style={{ backgroundColor: "white" }}>None</MenuItem>
                </Select>


              </Grid>

              <Grid item>
                <Typography>Third Choice Team</Typography>
                <Select
                  onChange={(e) => {
                    setThird_interested_team(e.target.value);
                  }}
                  style={{ minWidth: "230px" }}
                >
                  <MenuItem value="Fullstack" style={{ backgroundColor: "white" }}>Fullstack</MenuItem>
                  <MenuItem value="Simulation" style={{ backgroundColor: "white" }}>Simulation</MenuItem>
                  <MenuItem value="Machine learning" style={{ backgroundColor: "white" }}>Machine learning</MenuItem>
                  <MenuItem value="Information Support" style={{ backgroundColor: "white" }}>Information Support</MenuItem>
                  <MenuItem value="None" style={{ backgroundColor: "white" }}>None</MenuItem>
                </Select>


              </Grid>

              <Grid>
                <StyledButton style={{ color: '#222629', marginTop: '30px' }}>
                  Submit
              </StyledButton>
              </Grid>

              <Grid>
                <Typography style={{ color: "red" }}>
                  {submitMsg}
                </Typography>
              </Grid>

            </Grid >
          </form>
        </Box>
      </Card>
    </Container>
  )
}
export default TeamApplication;