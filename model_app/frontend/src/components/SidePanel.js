import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function DiseaseSelects() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        DiseaseVariants: "",
    })
    const handleChange = (event) => {
        const DiseaseVariants = event.target.DiseaseVariants;
        setState({
            ...state,
            DiseaseVariants: event.target.DiseaseVariants,
        });
    };
    return (
        <div>
            <FormControl className={classes.formControl}></FormControl>
            <InputLabel htmlFor="" color="white">Select Disease Variant</InputLabel>
            <Select onChange={handleChange}>
                <option aria-label="None" value="" />
                <option value={"B.1.351"}>B.1.351</option></Select>
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
                color="primary"
                className={classes.button}
                endIcon={<PlayArrow/>}
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
                color="primary"
                className={classes.button}
                endIcon={<PauseOutlinedIcon/>}
                onClick={handleClick}
            >
                Pause
      </Button>
        </div>
    );
}

function TargetedShutdown() {
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
                        control={<Switch checked={state.Schools} onChange={handleChange} name="Schools" />}
                        label="Schools" />
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={<Switch checked={state.Restaurants} onChange={handleChange} name="Restaurants" />}
                        label="Restaurant" />
                </Grid>
            </Grid>
            <Grid container justify="space-around">
                <Grid item>
                    <FormControlLabel
                        control={<Switch checked={state.Gyms} onChange={handleChange} name="Gyms" />}
                        label="Gyms" />
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={<Switch checked={state.Bars} onChange={handleChange} name="Bars" />}
                        label="Bars" />
                </Grid>
            </Grid>
        </FormGroup>
    );
}

export default function PersistentDrawerLeft() {
    const classes1 = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleClick = (event, newValue) => {
        setValue(newValue);
    }

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    };
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />

            <IconButton

                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
            >
                <ArrowRight fontSize='large' />
            </IconButton>

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
                <Typography paragraph>
                    Disease Variants
                    <DiseaseSelects />
                </Typography>
                <Divider classes={{ root: classes.divider }} />
                <Typography paragraph>
                    Non-Pharmaceutical Interventions (NPIS)
                 </Typography>
                <div className={classes1.root}>
                    <Typography id="input-slider" gutterBottom>
                        Mask-Wearing (% of Population)
                    </Typography>
                    <Grid container spacing={3} alignItems="left">
                        <Grid item xs>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                className={classes1.input}
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

                <Divider classes={{ root: classes.divider }} />
                <Typography paragraph>
                    Cities
                </Typography>

                <Divider classes={{ root: classes.divider }} />
                <Typography paragraph>
                    Simulator
                </Typography>
                <Divider classes={{ root: classes.divider }} />
                <Typography paragraph>
                    Targeted Shutdowns
                    <TargetedShutdown />
                </Typography>
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

                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
            </main>
        </div>
    );
}