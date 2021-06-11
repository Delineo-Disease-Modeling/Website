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
import { withTheme } from '@material-ui/styles';


const drawerWidth = 500;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        position: "absolute",
        top: '50%',
        textAlign: 'left',
        '&:hover': {
            backgroundColor: 'rgb(255 255 255 / 10%)'
        }
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#44494c',
        position: 'relative'
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        backgroundColor: '#ffffff',
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    drawerHeaderText: {
        color: 'black',
        alignItems: 'left',
    },
    controlButtons: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, 3),
        backgroundColor: '#ffffff',
        justifyContent: 'space-evenly',
    },
    divider: {
        background: '#ffffff',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        position: 'relative',
    },
    simulation: {

    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    inputLabel: {
        color: 'white'
    },
    button: {
        color: 'black',
        backgroundColor: 'rgba(102,252,241,255)'
    },
    switchBase: {
        color: "white",
        "&.Mui-disabled": {
            color: "grey"
        },
        "&.Mui-checked": {
            color: "white"
        },
        "&.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "rgba(102,252,241,255)"
        }
    },
    parameterHeader: {
        textAlign: 'left',
        paddingTop: '2%',
        paddingLeft: '2%!important',
        color: 'rgba(168,169,170,255)'
    },
    parameterContent: {
        textAlign: 'left',
        paddingLeft: '10%!important',
        paddingBottom: '2%'
    },
    optionSelect: {
        color: 'white'
    },
}));

function DiseaseSelects() {
    const classes = useStyles();
    const [DiseaseVariants, setDiseaseVariants] = React.useState("");
    const handleChange = (event) => {
        setDiseaseVariants(event.target.value);
    };
    return (
        <div>
            <FormControl className={classes.formControl}></FormControl>
            <InputLabel htmlFor="" className={classes.inputLabel} >Select Disease Variant</InputLabel>
            <Select value={DiseaseVariants} className={classes.optionSelect} onChange={handleChange}>
                <option value=""> </option>
                <option value="B.1.351">B.1.351</option></Select>
        </div>
    );
}

function RunButton() {
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
                endIcon={<PlayArrow />}
                onClick={handleClick}
            >
                Run
      </Button>
        </div>
    );
}

function PauseButton() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        paused: true,
    });

    const handleClick = (event) => {
        setState({
            ...state,
            paused: true,
        });
    };
    return (
        <div>
            <FormControl className={classes.formControl}></FormControl>
            <Button
                variant="contained"
                className={classes.button}
                endIcon={<PauseOutlinedIcon />}
                onClick={handleClick}
            >
                Pause
      </Button>
        </div>
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
            <Grid container justify="space-around">
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
            </Grid>
            <Grid container justify="space-around">
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
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                Mask-Wearing (% of Population)
        </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
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
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                Capacity Restrictions (% of People Entering Facilities)
        </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
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
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                Mass Testing (% of Population That Gets Tested)
        </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                </Grid>
                <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                    />
                </Grid>
                <Grid item>
                    <Input
                        className={classes.input}
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
            </Grid>
        </div>
    );
}
export default function PersistentDrawerLeft() {
    const classes1 = useStyles();
    const [value, setValue] = React.useState(30);


    const handleClick = (event, newValue) => {
        console.log("click")
        setValue(newValue);
    }


    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [cities, setCities] = React.useState("");
    const handleCitiesChange = (event) => {
        setCities(event.target.value);
        console.log("OK CITY");
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Typography className={classes.drawerHeaderText}>
                        Configure Parameters
                    </Typography>
                    <IconButton onClick={handleDrawerClose} color='inherit'>
                        {theme.direction === 'ltr' ? <ArrowLeft fontSize='large' /> : <ArrowRight fontSize='large' />}
                    </IconButton>
                </div>
                <Divider classes={{ root: classes.divider }} />
                <Typography className={classes.parameterHeader}>
                    Disease Variants
                </Typography>
                <div className={classes.parameterContent}>
                    <DiseaseSelects />
                </div>
                <Divider classes={{ root: classes.divider }} />
                <Typography className={classes.parameterHeader}>
                    Non-Pharmaceutical Interventions (NPIS)
                 </Typography>
                <MaskSlider />
                <CapacitySlider />
                <MassSlider />
                <Divider classes={{ root: classes.divider }} />
                <Typography className={classes.parameterHeader}>
                    Cities
                </Typography>
                <div className={classes.parameterContent}>
                    <FormControl className={classes.formControl}></FormControl>
                    <InputLabel htmlFor="" className={classes.inputLabel} >Select City</InputLabel>
                    <Select value={cities} className={classes.optionSelect} onChange={handleCitiesChange}>
                        <option value=""> </option>
                        <option value="Oklahoma City">Oklahoma City</option></Select>
                </div>
                <Divider classes={{ root: classes.divider }} />

                <Typography className={classes.parameterHeader}>
                    Targeted Shutdowns
                </Typography>
                <div className={classes.parameterContent}>
                    <TargetedShutdown />
                </div>
                <div className={classes.controlButtons} >
                    <PauseButton
                        onClick={handleClick}
                    />
                    <RunButton
                        onClick={handleClick}
                    />
                </div>
            </Drawer>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >

                <div className={classes.menuButton}>
                    <IconButton
                        height="10px"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <ArrowRight fontSize="large" />
                    </IconButton>
                </div>

                <div className={classes.simulation}>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                        elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
                        sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
                        mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
                        risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
                        purus viverra accumsan in. In hendrerit gravida rutrum quisque non
                        tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                        morbi tristique senectus et. Adipiscing elit duis tristique
                        sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                        eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                        posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </div>
            </main>
        </div>
    );
}