import { React, useState } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';

const TeamApplication = function TeamApplication() {

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [major, setMajor] = useState("");

  const [grad_year, setGrad_year] = useState("");

  const [first_interested_team, setFirst_interested_team] = useState("");
  const [second_interested_team, setSecond_interested_team] = useState("");
  const [third_interested_team, setThird_interested_team] = useState("");
  const [submitMsg, setSubmitMsg] = useState("")
  return (
    <>

      <Container fixed>

        <Box py={2} bgcolor="white" style={{ color: "black" }} align="left" >


          <Typography style = {{fontSize:"40px"}}>
            Join the team
        </Typography>

          <Grid container direction={"column"} spacing={2}>
            <Grid item>
              <Typography >
                First Name
        </Typography>
              <TextField required id="standard-basic" variant="outlined" label="First Name" onChange={e => setFirst_name(e.target.value)} />
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
                style = {{minWidth:"230px"}}
              >
                <MenuItem value="Fullstack" style = {{backgroundColor:"white"}}>Fullstack</MenuItem>
                <MenuItem value="Simulation" style = {{backgroundColor:"white"}}>Simulation</MenuItem>
                <MenuItem value="Machine learning" style = {{backgroundColor:"white"}}>Machine learning</MenuItem>
                <MenuItem value="Information Support" style = {{backgroundColor:"white"}}>Information Support</MenuItem>
              </Select>


            </Grid>

            <Grid item>
              <Typography>Second Choice Team</Typography>
              <Select
                onChange={(e) => {
                  setSecond_interested_team(e.target.value);
                }}
                style = {{minWidth:"230px"}}
              >
                <MenuItem value="Fullstack" style = {{backgroundColor:"white"}}>Fullstack</MenuItem>
                <MenuItem value="Simulation" style = {{backgroundColor:"white"}}>Simulation</MenuItem>
                <MenuItem value="Machine learning" style = {{backgroundColor:"white"}}>Machine learning</MenuItem>
                <MenuItem value="Information Support" style = {{backgroundColor:"white"}}>Information Support</MenuItem>
                <MenuItem value="None" style = {{backgroundColor:"white"}}>None</MenuItem>
              </Select>


            </Grid>

            <Grid item>
              <Typography>Third Choice Team</Typography>
              <Select
                onChange={(e) => {
                  setThird_interested_team(e.target.value);
                }}
                style = {{minWidth:"230px"}}
              >
                <MenuItem value="Fullstack" style = {{backgroundColor:"white"}}>Fullstack</MenuItem>
                <MenuItem value="Simulation" style = {{backgroundColor:"white"}}>Simulation</MenuItem>
                <MenuItem value="Machine learning" style = {{backgroundColor:"white"}}>Machine learning</MenuItem>
                <MenuItem value="Information Support" style = {{backgroundColor:"white"}}>Information Support</MenuItem>
                <MenuItem value="None"style = {{backgroundColor:"white"}}>None</MenuItem>
              </Select>


            </Grid>

            <Grid>
              <Button >
                Submit
              </Button>
            </Grid>

            <Grid>
              <Typography style={{ color: "red" }}>
                {submitMsg}
              </Typography>
            </Grid>

          </Grid >
        </Box>
      </Container>
    </>
  )
}
export default TeamApplication;