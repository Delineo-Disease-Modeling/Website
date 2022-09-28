import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
// import TabPanel from "./TabPanel";
import TabPanel from "./SimulationPanel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "rgba(196,196,196,255)",
    margin: "2%",
    paddingBottom: "1%",
    borderRadius: "20px",
    justifyContent: "space-around",
  },
  configurationsHeader: {
    backgroundColor: "rgba(49,53,56,255)",
    paddingTop: "1%",
    paddingBottom: "1%",
    borderRadius: "5px",
  },
  panelSection: {
    textAlign: "left",
    paddingTop: "2%",
    width: "30%",
  },
  confirmButtonPanel: {
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: "2%",
    width: "30%",
  },
  switchBase: {
    color: "rgba(49,53,56,255)",
    "&.Mui-checked": {
      color: "rgba(49,53,56,255)",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "rgb(102, 252, 241)",
      opacity: "1",
    },
  },
  switchTrack: {
    backgroundColor: "rgba(224,224,224,255)",
    opacity: "1",
  },
  sliderText: {
    color: "black",
    fontSize: "0.8rem",
    paddingLeft: "0",
    alignItems: "bottom",
  },
  switchText: {
    color: "black",
    paddingLeft: "0",
  },
  gridItemRight: {
    textAlign: "right",
  },
  centerText: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(49,53,56,255)",
    color: "white",
    paddingLeft: "65px",
    paddingRight: "65px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(93, 96, 99)",
    },
  },
  inputPercent: {
    backgroundColor: "#606060",
    color: "black",
    borderRadius: "50px",
    width: "70px",
    height: "35px",
  },
  unitText: {
    color: "black",
  },
  buttonSection: {
    textAlign: "center",
    paddingBottom: "25%",
  },
}));

function ConfirmButton(props) {
  const classes = useStyles();
  const [showError, setShowError] = React.useState(false);

  const handleClick = (event) => {
    let configs = props.configs;
    if (
      configs.maskPercent < 0 ||
      configs.capacityPercent < 0 ||
      configs.massPercent < 0 ||
      configs.vaccinePercent < 0
    ) {
      setShowError(true);
    } else {
      props.updateConfigs(configs); //configs get updated in parent component
    }
  };

  //Closes invalid input toast
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowError(false);
  };

  return (
    <div>
      <FormControl className={classes.formControl}></FormControl>
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClick}
      >
        Confirm
      </Button>
      <Snackbar
        open={showError}
        autoHideDuration={3000}
        message="Invalid input value"
        onClose={handleClose}
      />
    </div>
  );
}

export default function ConfigurationsPanel(props) {
  const classes = useStyles();

  let configs = JSON.parse(JSON.stringify(props.configs)); //Create a deep copy of parent configurations

  return (
    <div>
      <div className={classes.root}>
        <TabPanel conf={configs} />
      </div>
      <div className={classes.buttonSection}>
        <ConfirmButton
          className={classes.confBtn}
          updateConfigs={props.updateConfigs}
          configs={configs}
        />
      </div>
    </div>
  );
}
