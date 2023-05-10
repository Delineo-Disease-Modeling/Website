import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import { FormGroup, TextField } from "@material-ui/core";
import InputSlider from "./InputSlider";
import { Masks, ReduceCapacity, Biotech, Vaccines } from "@mui/icons-material";

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
  root: {
    display: "flex",
    backgroundColor: "rgba(196,196,196,255)",
    margin: "2%",
    paddingBottom: "1%",
    borderRadius: "20px",
    justifyContent: "space-around",
  },
}));

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
// modify labels as needed
let NPIs = [
  ["Mask-Wearing", InputSlider, "maskPercent","Percentage of population correctly wearing a mask"],
  ["Capacity Restrictions", InputSlider, "capacityPercent", "Percentage of capacity restrictions in place"],
  ["Mass Testing", InputSlider, "massPercent", "Percentage of mass testing taking place"],
  ["Stay-at-Home Order", Switch, "stayAtHome"],
];
let TargetedShutdowns = [
  ["Schools", Switch, "schoolsShutdown"],
  ["Restaurants", Switch, "restaurantsShutdown"],
  ["Gyms", Switch, "gymsShutdown"],
  ["Bars", Switch, "barsShutdown"],
];

let Vaccinations = [["Vaccination Population", InputSlider, "vaccinePercent", "Percentage of vaccinated population"]];
let Parameters = [["Initial Infected", TextField]];
let Preventions = [];

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ConfigurationsPanel(props) {
  /*  This function is used to create all the input sliders and switches for the configurations panel. 
It takes in a list of lists, where each list is a configuration name and the component type. 
It then creates a component for each configuration and returns a list of components. */

  function ConfirmButton(props) {
    const classes = useStyles();
    const [showError, setShowError] = React.useState(false);
    const [showDBRequest, setShowDBRequest] = React.useState(false);
    const [configs] = React.useState(props.configs);
    const handleClick = (event) => {
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
            <Button
              onClick={() => {
                setShowDBRequest((prevState) => {
                  return !prevState;
                });
              }}
              //autoFocus
              className={classes.dialogButton}
            >
              Cancel
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
    if (showDBRequest) return handleClickDB(configs);

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
  function createObj(configValue, type, name, classes, label) {
    if (type === InputSlider) {
      return (
        <object
          key={configValue}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px",
          }}
        >
          <Grid item xs={6}>
            <Typography className={classes.switchText}>{name}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridItemRight}>
            <InputSlider
              percentConfig={configs[configValue]}
              label={label}
              onChange={(value) => {
                updateConfigs((prevState) => {
                  return {
                    ...prevState,
                    [configValue]: value,
                  };
                });
              }}
            />
          </Grid>
        </object>
      );
    } else if (type === Switch) {
      return (
        <object
          key={configValue}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px",
          }}
        >
          <Grid item xs={6}>
            <Typography className={classes.switchText}>{name}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridItemRight}>
            <Switch
              checked={configs[configValue]}
              onChange={() => {
                updateConfigs((prevState) => {
                  return {
                    ...prevState,
                    [configValue]: !prevState[configValue],
                  };
                });
              }}
              name={name}
              classes={{
                track: classes.switchTrack,
                switchBase: classes.switchBase,
              }}
            />
          </Grid>
        </object>
      );
    } else if (type === TextField) {
      return (
        <object
          key={configValue}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px",
          }}
        >
          <Grid item xs={6}>
            <Typography className={classes.switchText}>{name}</Typography>
          </Grid>
          <Grid item xs={6} className={classes.gridItemRight}>
            <TextField
              id={name}
              variant="outlined"
              defaultValue={1000}
              onBlur={() => {
                configValue = document.getElementById(name).value;
              }}
            />
          </Grid>
        </object>
      );
    }
  }

  const classes = useStyles();
  const [configs, updateConfigs] = React.useState({
    maskPercent: 0,
    capacityPercent: 0,
    massPercent: 0,
    vaccinePercent: 0,
    stayAtHome: false,
    schoolsShutdown: false,
    restaurantsShutdown: false,
    gymsShutdown: false,
    barsShutdown: false,
    travelShutdown: false,
    socialDistancing: false,
    intitalInfected: 0,
  });

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        width: "100%",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "10px",
        paddingRight: "20px",
      }}
    >
      <div className={classes.rootTop}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              aria-label="basic tabs example"
            >
              <Tab label="NPI's" {...a11yProps(0)} />
              <Tab label="Targeted Shutdowns" {...a11yProps(1)} />
              <Tab label="Vaccinations" {...a11yProps(2)} />
              <Tab label="Parameters" {...a11yProps(3)} />
              <Tab label="Preventions" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container>
              {NPIs.map((npi) => {
                return createObj(npi[2], npi[1], npi[0], classes, npi[3]);
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {TargetedShutdowns.map((shutdown) => {
                return createObj(
                  shutdown[2],
                  shutdown[1],
                  shutdown[0],
                  classes,
                  configs
                );
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {Vaccinations.map((vaccination) => {
                return createObj(
                  vaccination[2],
                  vaccination[1],
                  vaccination[0],
                  classes,
                  vaccination[3],
                  configs
                );
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {Parameters.map((parameter) => {
                return createObj(
                  parameter[2],
                  parameter[1],
                  parameter[0],
                  classes,
                  configs
                );
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              {Preventions.map((prevention) => {
                return createObj(
                  prevention[2],
                  prevention[1],
                  prevention[0],
                  classes,
                  configs
                );
              })}
            </Grid>
          </TabPanel>
        </Box>{" "}
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
