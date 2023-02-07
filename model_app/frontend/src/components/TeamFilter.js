import React, { useState } from "react";

//These imports are for the default team page view
import TeamsList from "./TeamGrid";
import { withStyles } from "@material-ui/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

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

  h2: {
    color: "white",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 0,
    borderBottom: "3px solid #66FCF1",
    width: "fit-content",
    paddingBottom: 0,
    paddingTop: "20px",
    fontSize: 40,
  },

  h3: {
    color: "white",
    marginRight: 100,
    marginLeft: 100,
    marginTop: 40,

    width: "fit-content",

    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: "25px",
    border: "2px solid #2f3538",
    padding: "20px 20px 20px 20px",
    backgroundColor: "#2f3538",
    maxWidth: "1000px",
  },

  h4: {
    color: "white",
    marginRight: 100,
    marginLeft: 100,
    marginTop: 40,

    width: "fit-content",

    fontSize: 15,
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: "25px",
    border: "2px solid #2f3538",
    padding: "20px 20px 20px 20px",
    backgroundColor: "#2f3538",
    maxWidth: "1000px",
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
    backgroundColor: "#66FCF1",
  },
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
    past: false,
    backgroundColor: "#222629",
    color: "#66FCF1",
    borderColor: "#66FCF1",
  });

  const { classes } = props;
  const { all, fs, sim, ml, info, past } = filterState;

  const resize = () => {
    let isDesktop = window.innerWidth;
    if (isDesktop !== 1000) {
      return classes.h3;
    }
    return classes.h4;
  };

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
                    past: false,
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
                      type="body2"
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
                    past: false,
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
                    past: false,
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
                      Algorithms
                    </Typography>
                  }
                />
              </ColorListItem>
            </Grid>
            {false ? (
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
                      past: false,
                    })
                  }
                >
                  <ListItemText
                    className={
                      filterState.info
                        ? classes.clickedOn
                        : classes.selectedColor
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
            ) : null}
            <Grid item className={classes.gridItem}>
              <ColorListItem
                button
                selected={past}
                onClick={() =>
                  setFilterState({
                    all: false,
                    fs: false,
                    sim: false,
                    ml: false,
                    info: false,
                    past: true,
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
                      Past Members
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
          <div>
            <Typography varient="h2" className={classes.h2} align="center">
              Principal Investigator
            </Typography>
            <br />
            <TeamsList type="pi" />
            <Typography varient="h2" className={classes.h2} align="center">
              Team Leaders
            </Typography>
            <br />
            <TeamsList type="leader" />
            <Typography varient="h2" className={classes.h2} align="center">
              Team Members
            </Typography>
            <br />
            <TeamsList type="all" />
          </div>
        </div>
      ) : null}
      {fs ? (
        <div>
          <div align="center">
            <Typography className={resize()} align="center">
              Members of the fullstack team work throughout the stack. Our web
              application is built using the MERN stack (MongoDB, Express,
              ReactJS, NodeJS) and Unity Webgl. Members of this team also manage
              and access our geolocation data.
            </Typography>
          </div>
          <div>
            <Typography varient="h2" className={classes.h2} align="left">
              Team Members
            </Typography>
            <br />
            <TeamsList type="full" />
          </div>
        </div>
      ) : null}
      {sim ? (
        <div>
          <div align="center">
            <Typography className={resize()} align="center">
              The simulation team is responsible for the implementation of the
              simulation that lies at the heart of the Delineo project. Team
              members focus on programming the various modules, algorithms, and
              statistical drivers that are utilized in our models.
            </Typography>
          </div>
          <div>
            <Typography varient="h2" className={classes.h2} align="left">
              Team Members
            </Typography>
            <br />
            <TeamsList type="sim" />
          </div>
        </div>
      ) : null}
      {ml ? (
        <div>
          <div align="center">
            <Typography className={resize()}>
              The algorithms group is tackling the challenge of learning from
              the massive amounts of geolocation data the Delineo project has
              access to. One of the main focuses is on developing machine
              learning models that are capable of discerning and generating
              population movement patterns within communities ranging from rural
              towns to urban cities.
            </Typography>
          </div>
          <div>
            <Typography varient="h2" className={classes.h2} align="left">
              Team Members
            </Typography>
            <br />
            <TeamsList type="ml" />
          </div>
        </div>
      ) : null}
      {info ? (
        <div>
          <div align="center">
            <Typography varient="h2" className={resize()}>
              The information support team is responsible for gathering,
              summarizing, and disseminating research articles/papers that prove
              helpful for informing the development of Delineo's model.
            </Typography>
          </div>
          <div>
            <Typography varient="h2" className={classes.h2} align="left">
              Team Members
            </Typography>
            <br />
            <TeamsList type="info" />
          </div>
        </div>
      ) : null}
      {past ? (
        <div>
          <div align="center">
            <Typography varient="h2" className={resize()}>
              The past members of the Delineo team are a group of individuals
              who have devoted time to this project.
            </Typography>
          </div>
          <div>
            <Typography varient="h2" className={classes.h2} align="left">
              Team Members
            </Typography>
            <br />
            <TeamsList type="past" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default withStyles(styles)(TeamFilter);
