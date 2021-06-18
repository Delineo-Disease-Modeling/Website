import React from 'react';
import clsx from 'clsx';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import ArrowRight from '@material-ui/icons/ArrowRight';
import PlayArrow from '@material-ui/icons/PlayArrow';
import PauseOutlinedIcon from '@material-ui/icons/PauseOutlined'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { FormGroup } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: 'rgba(196,196,196,255)',
        margin: '2%',
        borderRadius: '20px',
        justifyContent: 'space-around'
    },
    configurationsHeader: {
        backgroundColor: 'rgba(49,53,56,255)',
        paddingTop: '1%',
        paddingBottom: '1%',
        borderRadius: '5px'
    },
    panelSection: {
        textAlign: 'left',
        paddingTop: "2%",
        width: "30%"
    },
    switchBase: {
        color: "rgba(49,53,56,255)",
        "&.Mui-checked": {
            color: "rgba(49,53,56,255)"
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "rgb(102, 252, 241)",
            opacity: '1'
        }
    },
    sliderText: {
        color: "black",
        fontSize: "0.8rem"
    },
    numSelectGrid: {
        textAlign: "right"
    },
    numSelect: {
        textAlign: "center",
    },
}));


function MaskSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };

    return (
        <div >
            <Grid container direction="row" alignItems="center">
                <Grid item xs={6}>
                    <Typography className={classes.sliderText} gutterBottom>
                        Mask-Wearing
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.numSelectGrid}>
                    <Input
                        className={classes.numSelect}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Grid>
        </div>
    );
}
function CapacitySlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
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
                    <Typography className={classes.sliderText} gutterBottom>
                        Capacity Restrictions
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.numSelectGrid}>
                    <Input
                        className={classes.numSelect}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function MassSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
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
                    <Typography className={classes.sliderText} gutterBottom>
                        Mass Testing
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.numSelectGrid}>
                    <Input
                        className={classes.numSelect}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function StayAtHome() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        Home: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormControlLabel
            control={
                <Switch checked={state.Home} classes={{ switchBase: classes.switchBase, }} onChange={handleChange} name="Home" />}
            label="Stay-at-Home Order"
            labelPlacement="start"
        />
    );
}

function TargetedShutdown() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        Schools: false,
        Restaurants: false,
        Gyms: false,
        Bars: false,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup>
            <Grid container direction="column" justify="space-around">
                <Grid item>
                    <FormControlLabel
                        control={
                            <Switch checked={state.Schools} classes={{ switchBase: classes.switchBase, }} onChange={handleChange} name="Schools" />}
                        label="Schools"
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                            <Switch checked={state.Restaurants} classes={{ switchBase: classes.switchBase, }} onChange={handleChange} name="Restaurants" />}
                        label="Restaurant"
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={<Switch checked={state.Gyms} classes={{ switchBase: classes.switchBase, }} onChange={handleChange} name="Gyms" />}
                        label="Gyms" />
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={<Switch checked={state.Bars} classes={{ switchBase: classes.switchBase, }} onChange={handleChange} name="Bars" />}
                        label="Bars" />
                </Grid>
            </Grid>
        </FormGroup>
    );
}

function VaccinationSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
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
            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={6}>
                    <Typography className={classes.sliderText} gutterBottom>
                        Vaccinated Population
          </Typography>
                </Grid>
                <Grid item xs={6} className={classes.numSelectGrid}>
                    <Input
                        className={classes.numSelect}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            step: 1,
                            min: 0,
                            max: 100,
                            type: "number",
                            "aria-labelledby": "input-slider"
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Slider
                        value={typeof value === "number" ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function ConfirmButton() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        paused: true,
    });
    const handleClick = (event) => {

        setState({
            ...state,
            paused: false,
        });
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
        </div>
    );
}

export default function ConfigurationsPanel() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.panelSection}>
                <Typography className={classes.configurationsHeader}>
                    NPI's
                </Typography>
                <MaskSlider />
                <CapacitySlider />
                <MassSlider />
                <StayAtHome />
            </div>
            <div className={classes.panelSection}>
                <Typography className={classes.configurationsHeader}>
                    Targeted Shutdowns
                </Typography>
                <TargetedShutdown />
            </div>
            <div className={classes.panelSection}>
                <Typography className={classes.configurationsHeader}>
                    Vaccinations
                </Typography>
                <VaccinationSlider />
                <ConfirmButton />
            </div>
        </div>
    );
}