import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import TopRight from "../images/temp/TopRightGraph.PNG";
import TopLeft from "../images/temp/TopGraph.PNG";
import BottomSection from "../images/temp/BottomSection.PNG";
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

const styles = {
	cardBackground: {
		backgroundColor: '#2f3538',
		alignContent: 'center',
		paddingBottom: '1%',
	},
	
	
	
	button: {
		marginTop: '30px'
	},
	description: {
		fontSize: '16px',
		letterSpacing: '1.2px',
		color: 'black',
		paddingBottom: '50px',
		paddingTop: '50px'
	},
	bubble: {
		color: "white",
		textAlign: "center",
		alignSelf: "center",
		alignItems: "center",
		margin: "100px 315px",
		borderRadius: "25px",
		border: "2px solid #2f3538",
		backgroundColor: "#c4c4c4",
	  },
	
	  
  
	
	  boldTitle: {
		top: "300px",
		color: "white",
		fontWeight: "bold",
		fontSize: 50,
		},
	
	
	
	  topdataleft: {
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
	
	  },
	  sliderMask_Wearing: {
		width: '210px',
		height:"20px",
		position: "absolute",
		top: 585,
		left: 370,

	  },
	  sliderCap_Restrictions: {
		width: '210px',
		height:"20px",
		position: "absolute",
		top: 627.5,
		left: 370,

	  },
	  sliderMass_Testing: {
		width: '210px',
		height:"20px",
		position: "absolute",
		top: 670,
		left: 370,

	  },
	  sliderVacc_Pop: {
		width: '210px',
		height:"20px",
		position: "absolute",
		top: 585,
		right:450,

	  },

	  StayAtHome: {
		width: '300px',
		height:"10px",
		position: "absolute",
		top: 200,
		right: 270,
	  },
	  Schools: {
		width: '210px',
		height:"10px",
		position: "absolute",
		top: 80,
		right: -50,
	  },
	  Restaurants: {
		width: '210px',
		height:"10px",
		position: "absolute",
		top: 120,
		right: -50,
	  },
	  Gyms: {
		width: '210px',
		height:"10px",
		position: "absolute",
		top: 160,
		right: -50,
	  },
	  Bars: {
		width: '210px',
		height:"10px",
		position: "absolute",
		top: 200,
		right: -50,
	  },
	  blueSwitch: {
		color: "#primary",
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
	const NewButton = styled(Button)({
		position: "absolute",
		right: '465px',
		top: '700px',
		bottom: '25px',
		height: 45,
		padding: '5px 60px 5px',
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

	  const SliderTemplate = withStyles({
		root: {
			color: '#62666e',
			height: 8,
		  },
		  thumb: {
			height: 18,
			width: 18,
			backgroundColor: '#b8fbfc',
			border: '2px solid currentColor',
			marginTop: -6,
			marginLeft: -8,
			'&:focus, &:hover, &$active': {
			  boxShadow: 'inherit',
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
			height: 6,
			borderRadius: 4,
		  },
	  })(Slider);
	  




class SimulatorOther extends React.Component {

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.cardBackground}>
				<div className={classes.backgroundColor}>
					<div>
						<div className={classes.flexContainer} align = "left">
							<img src={TopLeft} style = {styles.topdataleft} alt = "Count Graph"/>
							<div align = "center">
								<Typography style={styles.boldTitle}>Oklahoma City</Typography>
								<Typography style={styles.h2}>Oklahoma</Typography>
								<Typography style={styles.h3}>628664 Residents</Typography>
								<Typography style={styles.h3}>8231 Facilities</Typography>
								<br></br>
							</div>
							<div className={classes.flexContainer} align = "right" >
								<img src={TopRight} style = {styles.topdataright} alt = "Daily Count Graph" />
							</div>
						</div>
						<div className={classes.flexContainer} align = "left">
						<img src={BottomGraph} style = {styles.bottomdataleft} alt = "Circle Graph"/>
						<div className={classes.flexContainer} align = "center">
						<img src={MiddleImage} style = {styles.middleimage} alt = "City"/>
						<div className={classes.flexContainer} align = "right">
						<img src={BottomRight} style = {styles.bottomdataright} alt = "Bottom Random Info"/>
						<br></br>
						</div>
						</div>
						</div>
        <div>
    </div>
    <div className={classes.bubble} align="center">
      <div>
	  <SliderTemplate style = {styles.sliderMask_Wearing} valueLabelDisplay = "auto" defaultValue ={0} width = '50px'/>
	  <SliderTemplate style = {styles.sliderCap_Restrictions} valueLabelDisplay = "auto" defaultValue ={0} width = '50px'/>
	  <SliderTemplate style = {styles.sliderMass_Testing} valueLabelDisplay = "auto" defaultValue ={0} width = '50px'/>
	  <NewButton>Confirm</NewButton>
      
	  <FormControl component="fieldset" >
      <FormGroup aria-label="position" row>
        <FormControlLabel 
		  style = {styles.StayAtHome}
          value="left"
          control={<Switch style = {styles.blueSwitch} />}
          label="Stay-At-Home Order"
          labelPlacement="Start"
        />
		<FormControlLabel 
		  style = {styles.Schools}
          value="left"
          control={<Switch style = {styles.blueSwitch} />}
          label="Schools"
          labelPlacement="Start"
        />
		<FormControlLabel 
		  style = {styles.Restaurants}
          value="left"
          control={<Switch style = {styles.blueSwitch} />}
          label="Restaurants"
          labelPlacement="Start"
        />
		<FormControlLabel 
		  style = {styles.Gyms}
          value="left"
          control={<Switch style = {styles.blueSwitch}/>}
          label="Gyms"
          labelPlacement="Start"
        />
		<FormControlLabel 
		  style = {styles.Bars}
          value="left"
          control={<Switch style = {styles.blueSwitch} />}
          label="Bars"
          labelPlacement="Start"
        />
		</FormGroup>
	</FormControl>
	<SliderTemplate style = {styles.sliderVacc_Pop} valueLabelDisplay = "auto" defaultValue ={0} width = '50px'/>
	

      </div>
      </div>
      </div>
      </div>
	</div >
		);
	}
}
export default withStyles(styles)(SimulatorOther);
