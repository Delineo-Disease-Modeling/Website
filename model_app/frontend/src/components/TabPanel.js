import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { FormGroup, TextField } from "@material-ui/core";
import ToolTip from "./ToolTip";

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

const StyledSlider = withStyles({
  root: {
    color: "rgba(49,53,56,255)",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "rgb(102, 252, 241)",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover,": {
      boxShadow: "inherit",
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function MaskSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.configs.maskPercent = sanitizePercentInput(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    props.configs.maskPercent = sanitizePercentInput(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div>
      <Grid container direction="row" alignItems="center">
         <Grid container spacing={1}>
          <ToolTip description={"Mask-Wearing"} />
            <Grid item={true} xs={4}>
            <Typography className={classes.sliderText}>Mask-Wearing</Typography>
          </Grid>
        </Grid>
        <Grid item xs={8} className={classes.gridItemRight}>
          <Input
            className={classes.inputPercent}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            disableUnderline={true}
            fullWidth={true}
            endAdornment={
              <InputAdornment position="end">
                <div className={classes.unitText}>%</div>
              </InputAdornment>
            }
            inputProps={{
              style: { textAlign: "right" },
              step: 1,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledSlider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}

function CapacitySlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.configs.capacityPercent = sanitizePercentInput(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    props.configs.capacityPercent = sanitizePercentInput(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={6}>
          <Typography className={classes.sliderText}>
            Capacity Restrictions
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <Input
            className={classes.inputPercent}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            disableUnderline={true}
            fullWidth={true}
            endAdornment={
              <InputAdornment position="end">
                <div className={classes.unitText}>%</div>
              </InputAdornment>
            }
            inputProps={{
              style: { textAlign: "right" },
              step: 1,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledSlider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}

function MassSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    sanitizePercentInput((props.configs.massPercent = newValue));
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    props.configs.massPercent = sanitizePercentInput(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={6}>
          <Typography className={classes.sliderText}>Mass Testing</Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <Input
            className={classes.inputPercent}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            disableUnderline={true}
            fullWidth={true}
            endAdornment={
              <InputAdornment position="end">
                <div className={classes.unitText}>%</div>
              </InputAdornment>
            }
            inputProps={{
              style: { textAlign: "right" },
              step: 1,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledSlider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}

function StayAtHome(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    stayAtHome: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.configs[event.target.name] = event.target.checked;
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={8}>
        <Typography className={classes.switchText}>
          Stay-at-Home Order
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.gridItemRight}>
        <Switch
          checked={state.Home}
          classes={{
            track: classes.switchTrack,
            switchBase: classes.switchBase,
          }}
          onChange={handleChange}
          name="stayAtHome"
        />
      </Grid>
    </Grid>
  );
}

function TargetedShutdown(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    schoolsShutdown: false,
    restaurantsShutdown: false,
    gymsShutdown: false,
    barsShutdown: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    props.configs[event.target.name] = event.target.checked;
  };

  return (
    <FormGroup>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography className={classes.switchText}>Schools</Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <Switch
            checked={state.Schools}
            classes={{
              track: classes.switchTrack,
              switchBase: classes.switchBase,
            }}
            onChange={handleChange}
            name="schoolsShutdown"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.switchText}>Restaurants</Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <Switch
            checked={state.Restaurants}
            classes={{
              track: classes.switchTrack,
              switchBase: classes.switchBase,
            }}
            onChange={handleChange}
            name="restaurantsShutdown"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.switchText}>Gyms</Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <Switch
            checked={state.Gyms}
            classes={{
              track: classes.switchTrack,
              switchBase: classes.switchBase,
            }}
            onChange={handleChange}
            name="gymsShutdown"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.switchText}>Bars</Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <Switch
            checked={state.Bars}
            classes={{
              track: classes.switchTrack,
              switchBase: classes.switchBase,
            }}
            onChange={handleChange}
            name="barsShutdown"
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
}

function VaccinationSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.configs.vaccinePercent = sanitizePercentInput(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
    props.configs.vaccinePercent = sanitizePercentInput(
      event.target.value === "" ? "" : Number(event.target.value)
    );
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Typography className={classes.sliderText}>
            Vaccinated Population
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.gridItemRight}>
          <Input
            className={classes.inputPercent}
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            disableUnderline={true}
            fullWidth={true}
            endAdornment={
              <InputAdornment position="end">
                <div className={classes.unitText}>%</div>
              </InputAdornment>
            }
            inputProps={{
              style: { textAlign: "right" },
              step: 1,
              min: 0,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <StyledSlider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}

//Helper function to convert user inputs to be restricted between 0 and 100
//Returns -1 if input is not a number
function sanitizePercentInput(input) {
  if (isNaN(input) || typeof input !== "number") {
    //TODO: Test this logic
    return -1;
  }
  if (input > 100) {
    return 100;
  } else if (input < 0) {
    return 0;
  } else {
    return input;
  }
}

function TabPanel(props) {
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

export default function BasicTabs(conf) {
  const [value, setValue] = React.useState(0);

  let configs = JSON.parse(JSON.stringify(conf));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="NPI's" {...a11yProps(0)} style={{color:'black'}}/>
          <Tab label="Targeted Shutdowns" {...a11yProps(1)} style={{color:'black'}}/>
          <Tab label="Vaccinations" {...a11yProps(2)} style={{color:'black'}}/>
          <Tab label="Parameters" {...a11yProps(3)} style={{color:'black'}}/>
          <Tab label="Preventions" {...a11yProps(2)} style={{color:'black'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MaskSlider configs={configs} />
        <CapacitySlider configs={configs} />
        <MassSlider configs={configs} />
        <StayAtHome configs={configs} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TargetedShutdown configs={configs} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <VaccinationSlider configs={configs} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TextField id="numPeople" label="Number people" variant="outlined" />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Switch name="preventions" />
      </TabPanel>
    </Box>
  );
}
