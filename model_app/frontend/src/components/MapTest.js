import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import TopRight from "../images/temp/TopRightGraph.PNG";
import TopLeft from "../images/temp/TopGraph.PNG";
import BottomSection from "../images/temp/BottomSection.PNG";
import BottomGraph from "../images/temp/BottomGraph.PNG";
import BottomRight from "../images/temp/BottomRightImage.PNG";
import MiddleImage from "../images/temp/MiddleImage.PNG";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
/*import Image from "@material-ui/core/Image";
import Graph from "@material-ui/core/Graph";
import Slider from "@material-ui/core/Slider";
import LineChart from "@material-ui/core/LineChart";
import SliderText from "@material-ui/core/SliderText";
import GraphText from "@material-ui/core/GraphText";
import Title from "@material-ui/core/Title";
import CircleGraph from "@material-ui/core/CircleGraph";
import SubTitle from "@material-ui/core/SubTitle";
import Button from "@material-ui/core/Button";
import Shape from "@material-ui/core/Shape"; */

const styles = {
  bubble: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: "25px",
    border: "2px solid #2f3538",
    padding: "15px 15px 20px 20px",
    backgroundColor: "#c4c4c4",
    whiteSpace: "pre-wrap",
    fontFamily: "Montserrat",
  },

  flexContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 0,

    backgroundColor: "#2f3538",
    color: "#2f3538",

    margin: "0 auto",
    width: "fit-content",
  },

  bold: {
    color: "white",
    fontWeight: "bold",

    fontSize: 18,
    textAlign: "left",
    alignSelf: "center",
    alignItems: "center",
    whiteSpace: "pre-wrap",
  },
  boldTitle: {
    color: "white",
    fontWeight: "bold",

    fontSize: 50,
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    whiteSpace: "pre-wrap",
  },
  
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
    color: "black",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 0,
    borderBottom: "3px solid #66FCF1",
    width: "fit-content",
    paddingBottom: 0,
    paddingTop: "20px",
    fontSize: 40,
  },

  bottomdata: {
    width:"300px",
    height:"200px",
    //position: "absolute",
    left: "0",

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

  clickedOn: {
    color: "#222629",
  }
};

const StyledButton = styled(Button)({
  height: 48,
  padding: '0 30px',
  borderRadius: 3,
  borderColor: '#2f3538',
  backgroundColor: '#2f3538',
  border: '1px solid',
  color: '#ffffff',
  "&:hover": {
      backgroundColor: '#2f3538',
      color: '#ffffff',
      borderColor: '#2f3538',
      boxShadow: '0px 0px 10px #222629',
  },
});

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

    return (
      <div className="GreenBackground">
      <div>
        <div className={classes.flexContainer} align = "left">
          <img src={TopLeft} style = {styles.bottomdata}/>
          <div align = "center">
          <Typography varient='h4' component='h4' style={{color: 'white', fontSize: '36px'}}>Oklahoma City</Typography>
          <Typography varient='h4' component='h4' style={{color: 'white', fontSize: '24px'}}>Oklahoma</Typography>
          <br></br>
          <Typography varient='h4' component='h4' style={{color: 'white', fontSize: '12px'}}>628664 Residents</Typography>
          <Typography varient='h4' component='h4' style={{color: 'white', fontSize: '12px'}}>8231 Facilities</Typography>
          <br></br>
          </div>
          <div className={classes.flexContainer} align = "right">
          <img src={TopRight} style = {styles.bottomdata}/>
          </div>
        </div>
        <div className={classes.flexContainer} align = "left">
          <img src={BottomGraph} style = {styles.bottomdata}/>
        <div className={classes.flexContainer} align = "center">
          <img src={MiddleImage} style = {styles.bottomdata}/>
          <div className={classes.flexContainer} align = "right">
          <img src={BottomRight} style = {styles.bottomdata}/>
          <br></br>
        </div>
        </div>
        </div>
        <div>
    </div>
    <div className={classes.bubble} align="center">
      <div>
      <img src={BottomSection} width="`250px`" height="250px" />
      </div>
      <StyledButton> Confirm</StyledButton>
      </div>
      </div>
      </div>
    );
  }
}
export default withStyles(styles)(MapTest);
