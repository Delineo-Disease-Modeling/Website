import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import TabPanel from "./SimulationPanel";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  rootTop: {
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: "10px 10px 0px 0px",
    justifyContent: "space-around",
    paddingBottom: "1%",
  },
  rootBottom: {
    display: "flex",
    backgroundColor: "white",
    borderRadius: "0px 0px 10px 10px",
    justifyContent: "space-around",
    paddingBottom: "1%",
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
    color: "white",
    fontSize: "0.8rem",
    paddingLeft: "0",
    alignItems: "bottom",
  },
  switchText: {
    color: "white",
    paddingLeft: "0",
  },
  gridItemRight: {
    textAlign: "right",
  },
  centerText: {
    textAlign: "center",
  },
  button: {
    backgroundColor: "#91F9F0",
    color: "black",
    paddingLeft: "65px",
    paddingRight: "65px",
    boxShadow: "none",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "rgba(93, 96, 99)",
    },
  },
  inputPercent: {
    backgroundColor: "#606060",
    color: "white",
    borderRadius: "50px",
    width: "70px",
    height: "35px",
  },
  unitText: {
    color: "white",
  },
  buttonSection: {
    textAlign: "center",
  },

  dialogTitle: {
    //textAlign: "center",
  },

  dialogText: {
    color: "white",
    //textAlign: "center",
  },

  dialogButton: {
    color: "#66FCF1",
    border: "2px solid #66FCF1",
    alignSelf: "center",
    "&:hover": {
      color: "black",
      backgroundColor: "#66FCF1",
    },
  },
}));

function ConfirmButton(props) {
  const classes = useStyles();
  const [showError, setShowError] = React.useState(false);
  const [showDBRequest, setShowDBRequest] = React.useState(false);
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
      setShowDBRequest((prevState) => {
        return !prevState;
      });
    }
  };

  const handleClickDB = (configs) => {
    return (
      <Dialog
        open={showDBRequest}
        onClose={() =>
          setShowDBRequest((prevState) => {
            return !prevState;
          })
        }
      >
        <DialogTitle className={classes.dialogTitle}>
          Pre-Generated Simulation
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dialogText}>
            Would you like to use a pre-existing simulation from our database?
            This will greatly decrease runtime.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowDBRequest((prevState) => {
                return !prevState;
              });
              props.updateConfigs(configs, false); //configs get updated in parent component
            }}
            //autoFocus
            className={classes.dialogButton}
          >
            No
          </Button>
          <Button
            onClick={() => {
              setShowDBRequest((prevState) => {
                return !prevState;
              });
              props.updateConfigs(configs, true); //configs get updated in parent component
            }}
            //autoFocus
            className={classes.dialogButton}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    );
  };
  //Closes invalid input toast
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowError(false);
  };
  if (showDBRequest) return handleClickDB(props.configs);

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
    <div
      style={{
        width: "100%",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "10px",
        paddingRight: "20px"
      }}
    >
      <div className={classes.rootTop}>
        <TabPanel conf={configs} />
      </div>
      <div className={classes.rootBottom}>
        <div className={classes.buttonSection}>
          <ConfirmButton
            className={classes.confBtn}
            updateConfigs={props.updateConfigs}
            configs={configs}
          />
        </div>
      </div>
    </div>
  );
}
