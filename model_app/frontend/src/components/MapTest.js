import React, { Component } from "react";

import { withStyles } from "@material-ui/core";


import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import emeSulImg from '../images/Emerson_Sullivan.jpg';
import aboutImg from '../images/about.jpg';

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
    padding: 0,

    backgroundColor: "#66FCF1",
    color: "#66FCF1",

    margin: "0 auto",
    width: "fit-content",
  },

  clickedOn: {
    color: "#222629",
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

class MapTest extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  constructor(props) {
    super(props);
    this.state = {
      all: true,
      fs: false,
      sim: false,
      ml: false,
      info: false,
      test6: false,
      backgroundColor: "#222629",
      color: "#66FCF1",
      borderColor: "#66FCF1",
    };
  }

  render() {
    const { classes } = this.props;

    const { all, fs, sim, ml, info, test6} = this.state;

    return (
      <div>
        <br />
        <div className={classes.flexContainer}>
          <List
            className={classes.flexContainer}
            component="nav"
            aria-label="all fs sim ml info test6"
          >
            <ColorListItem
              className={classes.root}
              button
              onClick={() =>
                this.setState({
                  all: true,
                  fs: false,
                  sim: false,
                  ml: false,
                  info: false,
                  test6: false,
                })
              }
              selected={all}
            >
              <ListItemText
                className={
                  this.state.all ? classes.clickedOn : classes.selectedColor
                }
                primary={
                  <Typography
                    type="body2"
                    style={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Test1
                  </Typography>
                }
              />
            </ColorListItem>

            <ColorListItem
              button
              selected={fs}
              onClick={() =>
                this.setState({
                  all: false,
                  fs: true,
                  sim: false,
                  ml: false,
                  info: false,
                  test6: false,
                })
              }
            >
              <ListItemText
                className={
                  this.state.fs ? classes.clickedOn : classes.selectedColor
                }
                primary={
                  <Typography
                    type="body2"
                    style={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Test2
                  </Typography>
                }
              />
            </ColorListItem>
            <ColorListItem
              button
              selected={sim}
              onClick={() =>
                this.setState({
                  all: false,
                  fs: false,
                  sim: true,
                  ml: false,
                  info: false,
                  test6: false,
                })
              }
            >
              <ListItemText
                className={
                  this.state.sim ? classes.clickedOn : classes.selectedColor
                }
                primary={
                  <Typography
                    type="body2"
                    style={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Test3
                  </Typography>
                }
              />
            </ColorListItem>
            <ColorListItem
              button
              selected={ml}
              onClick={() =>
                this.setState({
                  all: false,
                  fs: false,
                  sim: false,
                  ml: true,
                  info: false,
                  test6: false,
                })
              }
            >
              <ListItemText
                className={
                  this.state.ml ? classes.clickedOn : classes.selectedColor
                }
                primary={
                  <Typography
                    type="body2"
                    style={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Test 4
                  </Typography>
                }
              />
            </ColorListItem>
            <ColorListItem
              button
              selected={info}
              onClick={() =>
                this.setState({
                  all: false,
                  fs: false,
                  sim: false,
                  ml: false,
                  info: true,
                  test6: false,
                })
              }
            >
              <ListItemText
                className={
                  this.state.info ? classes.clickedOn : classes.selectedColor
                }
                primary={
                  <Typography
                    type="body2"
                    style={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Test 5
                  </Typography>
                }
              />
            </ColorListItem>
            <ColorListItem
              button
              selected={info}
              onClick={() =>
                this.setState({
                  all: false,
                  fs: false,
                  sim: false,
                  ml: false,
                  info: false,
                  test6: true,
                })
              }
            >
              <ListItemText
                className={
                  this.state.info ? classes.clickedOn : classes.selectedColor
                }
                primary={
                  <Typography
                    type="body2"
                    style={{ fontWeight: "bold", fontSize: "16px" }}
                  >
                    Test 6
                  </Typography>
                }
              />
            </ColorListItem>
          </List>
        </div>
        {}

        {all ? (
          <div>
            <br></br>
            <div>
              <img src = {emeSulImg} width ="1000px" height ="500px"/>
            </div>
          </div>
        ) : null}
        {fs ? (
          <div>
           <img src = {aboutImg} width ="1000px" height ="500px"/>
          </div>
        ) : null}
        {sim ? (
          <div>
            
          </div>
        ) : null}
        {ml ? (
          <div>
          </div>
        ) : null}
        {info ? (
          <div>
    
          </div>
        ) : null}
        {test6 ? (
          <div>
    
          </div>
        ) : null}
      </div>
    );
  }
}
export default withStyles(styles)(MapTest);
