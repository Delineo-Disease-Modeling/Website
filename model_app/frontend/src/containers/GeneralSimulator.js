import React, { Component } from "react";
import "./GeneralSimulator.css";
import { withStyles } from "@material-ui/core/styles";
import SidePanel from "../components/SidePanel";

//import Accordion from "@material-ui/core/Accordion";

/*
const ColoredAccordion = withStyles({
  root: {
    backgroundColor: "#1b4441c2",
    fontSize: "20px",
    color: "#66FCF1",
  },
})(Accordion);
*/

const styles = (theme) => ({
  bubble: {
    color: "white",

    width: 950,
    position: "relative",
    fontSize: 15,
    textAlign: "left",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: "25px",
    border: "2px solid #2f3538",
    padding: "15px 15px 20px 20px",
    backgroundColor: "#2f3538",
    whiteSpace: "pre-wrap",
    fontFamily: "Montserrat",
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
});

class SimulatorTemp extends Component {
  // classes = useStyles();

  constructor() {
    super();
    
  }

  render() {

    return(
      <div >
        <SidePanel />
      </div>
    );
  }
}

export default withStyles(styles)(SimulatorTemp);