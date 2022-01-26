import React, { useState } from "react";

//These imports are for the default team page view
import TeamGridList from "../components/TeamGridList.js";
import SupGridList from "../components/SupGridList.js";
import LeadGridList from "../components/LeaderGridList.js";
import PastTeamGridList from "../components/PastTeamGridList.js";
import { withStyles } from "@mui/styles";

//These imports are for when someone actually wants to filter
import FullStackGridList from "../components/FullStackGridList.js";
import SimGridList from "../components/SimGridList.js";
import MLGridList from "../components/MLGridList.js";
import InfoTeamGridList from "../components/InfoTeamGridList.js";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const styles = {
  root: {
    borderColor: "#66FCF1",
    backgroundColor: "#222629",
    border: "2px solid",
    color: "#66FCF1",
    fontWeight: "bold",
    width: "200px",
    textAlign: "center",
  },

  CardGreenBackground1: {
    marginTop: "0%",
    backgroundColor: "#4A4E51",
  },

  focus: {
    backgroundColor: "#222629",
    color: "#66FCF1",
    borderColor: "#66FCF1",
    border: "1px solid",
  },

  notfocus: {
    borderColor: "#66FCF1",
    backgroundColor: "#66FCF1",
    border: "1px solid",
    color: "#444f56",
  },

  flexContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 0,
    color: "#66FCF1",
    margin: "0 auto",
    width: "fit-content",
  },

  clickedOn: {
    color: "#222629",
  },

  gridItem: {
    backgroundColor: "#66FCF1"
  }
};

const ColorListItem = withStyles((theme) => ({
  root: {
    borderColor: "#66FCF1",
    backgroundColor: "#222629",
    border: "2px solid",
    color: "#66FCF1",
    fontWeight: "bold",

    width: "200px",
    height: "76px",
    textAlign: "center",

    "&.Mui-selected, &$.Mui-selected:hover": {
      backgroundColor: "#66FCF1",
      color: "#222629",
      borderColor: "#66FCF1",
    },
    "&:hover": {
      backgroundColor: "#66FCF1",
      color: "#222629",
      borderColor: "#66FCF1",
    },
    "&:hover $selectedColor": {
      color: "#222629",
    },
  },
}))(ListItem);

const TeamFilter = (props) => {
  const [filterState, setFilterState] = useState({
    all: true,
    fs: false,
    sim: false,
    ml: false,
    info: false,
    backgroundColor: "#222629",
    color: "#66FCF1",
    borderColor: "#66FCF1",
  });

  const changeDiv = () => {
    setFilterState({
      all: false,
      fs: false,
      sim: false,
      ml: false,
      info: false,
    });
  }

  const { classes } = props;
  const { all } = filterState;
  const { fs } = filterState;
  const { sim } = filterState;
  const { ml } = filterState;
  const { info } = filterState;

  // const resize = () => {
  //   let isDesktop = (window.innerWidth);
  //   if (isDesktop !== 1000) {
  //     return classes.desktop;
  //   }
  //   console.log("phone");
  //   return classes.phone;

  // };

  return (
    <div>
      <br />
      <div>
        <List
          className={classes.flexContainer}
          component="nav"
          aria-label="all fs sim ml info"
        >
          <Grid container spacing={0} className={classes.flexContainer}>
            <Grid item className={classes.gridItem}>
              <ColorListItem
                className={classes.root}
                button
                onClick={() =>
                  setFilterState({
                    all: true,
                    fs: false,
                    sim: false,
                    ml: false,
                    info: false,
                  })
                }
                selected={all}
              >
                <ListItemText
                  className={
                    filterState.all ? classes.clickedOn : classes.selectedColor
                  }
                  primary={
                    <Typography
                      type="descriptio"
                      style={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      All
                    </Typography>
                  }
                />
              </ColorListItem>
            </Grid>
            <Grid item className={classes.gridItem}>
              <ColorListItem
                button
                selected={fs}
                onClick={() =>
                  setFilterState({
                    all: false,
                    fs: true,
                    sim: false,
                    ml: false,
                    info: false,
                  })
                }
              >
                <ListItemText
                  className={
                    filterState.fs ? classes.clickedOn : classes.selectedColor
                  }
                  primary={
                    <Typography
                      type="body2"
                      style={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      Fullstack
                    </Typography>
                  }
                />
              </ColorListItem>
            </Grid>
            <Grid item className={classes.gridItem}>
              <ColorListItem
                button
                selected={sim}
                onClick={() =>
                  setFilterState({
                    all: false,
                    fs: false,
                    sim: true,
                    ml: false,
                    info: false,
                  })
                }
              >
                <ListItemText
                  className={
                    filterState.sim ? classes.clickedOn : classes.selectedColor
                  }
                  primary={
                    <Typography
                      type="body2"
                      style={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      Simulation
                    </Typography>
                  }
                />
              </ColorListItem>
            </Grid>
            <Grid item className={classes.gridItem}>
              <ColorListItem
                button
                selected={ml}
                onClick={() =>
                  setFilterState({
                    all: false,
                    fs: false,
                    sim: false,
                    ml: true,
                    info: false,
                  })
                }
              >
                <ListItemText
                  className={
                    filterState.ml ? classes.clickedOn : classes.selectedColor
                  }
                  primary={
                    <Typography
                      type="body2"
                      style={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      Machine Learning
                    </Typography>
                  }
                />
              </ColorListItem>
            </Grid>
            <Grid item className={classes.gridItem}>
              <ColorListItem
                button
                selected={info}
                onClick={() =>
                  setFilterState({
                    all: false,
                    fs: false,
                    sim: false,
                    ml: false,
                    info: true,
                  })
                }
              >
                <ListItemText
                  className={
                    filterState.info ? classes.clickedOn : classes.selectedColor
                  }
                  primary={
                    <Typography
                      type="body2"
                      style={{ fontWeight: "bold", fontSize: "16px" }}
                    >
                      Information Support
                    </Typography>
                  }
                />
              </ColorListItem>
            </Grid>
          </Grid>
        </List>
      </div>
      {/*
          <ColorButton mt={2} variant="contained" color="#66FCF1" onClick={() => setFilterState({ all: true, fs: false, sim: false, ml: false, info: false})}>all</ColorButton>

          <ColorButton mt={2} variant="contained" color="#66FCF1"  onClick={() => setFilterState({ all: false, fs: true, sim: false, ml: false, info: false})}>full stack</ColorButton>

          <ColorButton mt={2} variant="contained" color="#66FCF1"  onClick={() => setFilterState({ all: false, fs: false, sim: true, ml: false, info: false })}>simulation</ColorButton>

          <ColorButton mt={2} variant="contained" color="#66FCF1"  onClick={() => setFilterState({ all: false, fs: false, sim: false, ml: true, info: false })}>machine learning</ColorButton>

          <ColorButton mt={2} variant="contained" color="#66FCF1"  onClick={() => setFilterState({ all: false, fs: false, sim: false, ml: false, info: true })}>infop</ColorButton>
        */}
      {all ? (
        <div>
          <br></br>
          <div >
            <Typography variant="h7" component='h2' align="center" style={{paddingTop: '20px'}}>
              Principal Investigator
            </Typography>
            <br />
            <SupGridList />
            <Typography variant="h7" component='h2' align="center">
              Team Leaders
            </Typography>
            <br />
            <LeadGridList></LeadGridList>
            <Typography variant="h7" component='h2' align="center">
              Team Members
            </Typography>
            <br />
            <TeamGridList></TeamGridList>
            <Typography variant="h7" component='h2' align="center">
              Past Members
            </Typography>
            <br />
            <PastTeamGridList></PastTeamGridList>
          </div>
        </div>
      ) : null}
      {fs ? (
        <div>
          <div align="center">
            <Typography variant='body2' align="center">
              Members of the fullstack team work throughout the stack. Our web
              application is built using the MERN stack (MongoDB, Express,
              ReactJS, NodeJS) and Unity Webgl. Members of this team also
              manage and access our geolocation data.
            </Typography>
          </div>
          <div>
            <Typography variant="h7" component='h2' align="left">
              Team Members
            </Typography>
            <br />
            <FullStackGridList></FullStackGridList>
          </div>
        </div>
      ) : null}
      {sim ? (
        <div>
          <div align="center">
            <Typography variant='body2' align="center">
              The simulation team is responsible for the implementation of the
              simulation that lies at the heart of the Delineo project. Team
              members focus on programming the various modules, algorithms,
              and statistical drivers that are utilized in our models.
            </Typography>
          </div>
          <div>
            <Typography variant="h7" component='h2' align="left">
              Team Members
            </Typography>
            <br />
            <SimGridList></SimGridList>
          </div>
        </div>
      ) : null}
      {ml ? (
        <div>
          <div align="center">
            <Typography variant='body2'>
              The machine learning group is tackling the challenge of learning
              from the massive amounts of geolocation data the Delineo project
              has access to. One of the main focuses is on developing machine
              learning models that are capable of discerning and generating
              population movement patterns within communities ranging from
              rural towns to urban cities.
            </Typography>
          </div>
          <div>
            <Typography variant="h7" component='h2' align="left">
              Team Members
            </Typography>
            <br />
            <MLGridList></MLGridList>
          </div>
        </div>
      ) : null}
      {info ? (
        <div>
          <div align="center">
            <Typography variant="body2" >
              The information support team is responsible for gathering,
              summarizing, and disseminating research articles/papers that
              prove helpful for informing the development of Delineo's model.
            </Typography>
          </div>
          <div>
            <Typography variant="h7" component='h2' align="left">
              Team Members
            </Typography>
            <br />
            <InfoTeamGridList></InfoTeamGridList>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(TeamFilter);
