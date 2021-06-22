import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TopRight from "../images/temp/TopRightGraph.PNG";
import TopLeft from "../images/temp/TopGraph.PNG";
import BottomGraph from "../images/temp/BottomGraph.PNG";
import BottomRight from "../images/temp/BottomRightImage.PNG";
import MiddleImage from "../images/temp/MiddleImage.PNG";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';

const styles = {
	BlackBackground: {
		backgroundColor: '#2f3538',
		alignContent: 'center',
		paddingBottom: '1%',
	},
	

	simControls: {
		color: "black",
		fontWeight: "bold",
		fontSize: 12,
		textAlign: "left",
		whiteSpace: "pre-wrap",
	  },
	  simControlsHeader: {
		color: "white",
		fontSize: 18,
		textAlign: "left",
	  },

	bubble: {
		textAlign: "center",
		alignSelf: "center",
		alignItems: "center",
		margin: "100px 315px",
		borderRadius: "25px",
		border: "2px solid #2f3538",
		backgroundColor: "#c4c4c4",
	  },

	  textbubble: {
		alignSelf: "right",
		borderRadius: "25px",
		border: "5px solid #2f3538",
		backgroundColor: "#2f3538",
	  },
	
	
	
	  boldTitle: {
		top: "300px",
		color: "white",
		fontWeight: "bold",
		fontSize: 50,
		},
	
	
	
	/*  topdataleft: {
		width:"300x",
		height:"200px",
		position: "absolute",
		left: "200px",
		borderRadius: "25px",
		border: "2px solid #2f3538",
		top: "115px",
	
	  },
	
	  bottomdataleft: {
		width:"400x",
		height:"135px",
		position: "absolute",
		left: "200px",
		top: "345px", 
		borderRadius: "25px",
		border: "2px solid #2f3538",
	  },
	
	  middleimage: {
		width: "500px",
	  }, 
	
	  topdataright: {
		width:"300x",
		height:"200px",
		position: "absolute",
		right: "200px",
		top: "115px", 
			borderRadius: "25px",
		border: "2px solid #2f3538",
	
	  },
	
	  bottomdataright: {
		width:"300x",
		height:"108px",
		position: "absolute",
		right: "195px",
		top: "345px", 
	
	  }, */


	  sliderTemp: {
		width: '210px',
	  },

	  blueSwitch: {
		color: "#222629",
	  }
	};
	
	const StyledSwitch = styled(Switch)({
		root: {
			width: 22,
			height: 16,
			padding: 0,
			display: 'flex',
		  },
		  switchBase: {
			padding: 2,
			color: "#2f3538",
			'&$checked': {
			  transform: 'translateX(12px)',
			  color: "",
			  '& + $track': {
				opacity: 1,
				backgroundColor: "#2f3538",
				borderColor: "#2f3538",
			  },
			},
		  },
		  thumb: {
			width: 12,
			height: 12,
			boxShadow: 'none',
		  },
		  track: {
			border: `1px solid ${"#2f3538"}`,
			borderRadius: 16 / 2,
			opacity: 1,
			backgroundColor: "#2f3538",
		  },
		  checked: {},
	});

	const StyledButton = styled(Button)({
	  height: 48,
	  padding: '6px 12px',
	  border: '1px solid',
	  backgroundColor: '#2f3538',
	  color: '#ffffff',
	  borderRadius: "1em",
	  "&:hover": {
		  backgroundColor: '#2f3538',
		  color: '#ffffff',
		  borderColor: '#2f3538',
		  boxShadow: '0px 0px 10px #222629',
	  },
	});

	  const SliderTemplate = withStyles({
		root: {
			color: '#2f3538',
			height: 8,
		  },
		  thumb: {
			height: 18,
			width: 18,
			backgroundColor: '#66fcf1',
			border: '2px solid currentColor',
			marginTop: -6,
			marginLeft: -8,
			boxShadow: '#ebebeb 0 2px 2px',
			'&:focus, &:hover, &$active': {
			  boxShadow: '#ccc 0 2px 3px 1px',
			},
		  },
		  active: {},
		  valueLabel: {
			left: 'calc(-50% + 4px)',
		  },
		  track: {
			height: 6,
			borderRadius: 4,
		  },
		  rail: {
			color: '#2f3538',
			opacity: 1,
			height: 6,
			borderRadius: 4,
		  },
	  })(Slider);
	  


class SimulatorOther extends React.Component {

	render() {
		function Col1() {
		return (
				<FormControl component="fieldset" >
		<FormGroup aria-label="position" column>
		  <br></br>
		  <div className={classes.textbubble} align="center">
		  <Typography style={styles.simControlsHeader}>NPI's</Typography> 
		  </div>
		  <br></br>
			  <Typography style={styles.simControls}>Mask-Wearing</Typography>
				<SliderTemplate style = {styles.sliderTemp} valueLabelDisplay = "auto" defaultValue ={0}/>
			  <Typography style={styles.simControls} >Capacity Restrictions</Typography>
				<SliderTemplate style = {styles.sliderTemp} valueLabelDisplay = "auto" defaultValue ={0} />
			  <Typography style={styles.simControls} >Mass Testing</Typography>
			  <SliderTemplate style = {styles.sliderTemp} valueLabelDisplay = "auto" defaultValue ={0} />
		</FormGroup>
		<FormGroup aria-label="position">
		<FormControlLabel 
						control={<StyledSwitch StyledSwitch size="small" StyledSwitch name = "Stay-at-Home Order"/>}
						label={
							<Box component="div" fontSize={10} fontWeight = "bold" textAlign = "left">
							   Stay-at-Home Order
							 </Box>
					   }
						labelPlacement="Start"
						/>
		</FormGroup>
	  </FormControl>);
		}
		function Col2() {
			return (  
			<FormControl component="fieldset" >
				<FormGroup aria-label="position" column>
					<br></br>
					<div className={classes.textbubble} align="center">
					<Typography style={styles.simControlsHeader}>Targeted Shutdowns</Typography> 
					</div>
					<br></br>
					<FormControlLabel 
						control={<StyledSwitch />}
						label={
							<Box component="div" fontSize={15} fontWeight = "bold" textAlign = "left">
							   Schools
							 </Box>
					   }
						labelPlacement="Start"/>
					<FormControlLabel 
						control={<StyledSwitch/>}
						label={
							<Box component="div" fontSize={15} fontWeight = "bold" textAlign = "left">
							   Restaurants
							 </Box>
					   }
						labelPlacement="Start"/>
					<FormControlLabel 
						control={<StyledSwitch />}
						label={
							<Box component="div" fontSize={15} fontWeight = "bold" textAlign = "left">
							   Gyms
							 </Box>
					   }
						labelPlacement="Start"/>
					<FormControlLabel 
						control={<StyledSwitch />}
						label={
							<Box component="div" fontSize={15} fontWeight = "bold" textAlign = "left">
							   Bars
							 </Box>
					   }
						labelPlacement="Start"/>
				</FormGroup>
		  </FormControl>);
		}
		function Col3() {
			return (  
				<FormControl component="fieldset" >
				<FormGroup aria-label="position" column>
					<br></br>
					<div className={classes.textbubble} align="center">
					<Typography style={styles.simControlsHeader}>Vaccinations</Typography>
					</div>
					<br></br>
					<Typography style={styles.simControls} >Vaccinated Population</Typography>
			<SliderTemplate style = {styles.sliderTemp} valueLabelDisplay = "auto" defaultValue ={0}/>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<StyledButton>Confirm</StyledButton>
			</FormGroup>
			</FormControl>);
		}

		function Text() {
			return (	
				<div>					
			<Typography style={styles.boldTitle}>Oklahoma City</Typography>
				<Typography style={styles.h2}>Oklahoma</Typography>
				<Typography style={styles.h3}>628664 Residents</Typography>
				<Typography style={styles.h3}>8231 Facilities</Typography>
				<br></br>
				</div>	);
		}

		function Images() {
			return (
			<div> 							
				<img src={TopLeft} style = {styles.topdataleft} alt = "Count Graph"/>
			<img src={TopRight} style = {styles.topdataright} alt = "Daily Count Graph" />
	<img src={BottomGraph} style = {styles.bottomdataleft} alt = "Circle Graph"/>
	<img src={MiddleImage} style = {styles.middleimage} alt = "City"/>
	<img src={BottomRight} style = {styles.bottomdataright} alt = "Bottom Random Info"/></div>);
		}

		const { classes } = this.props;
		return (
			<div className={classes.BlackBackground}>
				<Text />
						<br></br>
						<Images />
	<div className={classes.bubble} align="center">
          <Col1 />
          <Col2 />
          <Col3 />
	
			</div>
	</div >
		);
	}
}
export default withStyles(styles)(SimulatorOther);
