import React from "react";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import './SimulatorOther.css'
import Typography from "@material-ui/core/Typography";
import TopRight from "../images/temp/TopRightGraph.PNG";
import TopLeft from "../images/temp/TopGraph.PNG";
import BottomSection from "../images/temp/BottomSection.PNG";
import BottomGraph from "../images/temp/BottomGraph.PNG";
import BottomRight from "../images/temp/BottomRightImage.PNG";
import MiddleImage from "../images/temp/MiddleImage.PNG";
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const styles = {
	cardBackground: {
		backgroundColor: '#2f3538',
		alignContent: 'center',
		paddingBottom: '1%',
	},
	underline: {
		width: '200px',
		margin: 'auto',
		borderTop: '3px solid #66FCF1',
		marginBottom: '30px'
	},
	title: {
		position: 'absolute',
		top: '190px',
		left: '20%',
		letterSpacing: '1.5px',
		lineHeight: '50px',
		textShadow: '2px 2px 15px black',
		textAlign: 'left'
	},
	subtitle: {
		position: 'absolute',
		top: '320px',
		left: '20%',
		fontSize: '18px',
		textShadow: '2px 2px 10px black',
		textAlign: 'left'
	},
	border: {
		position: 'absolute',
		top: '300px',
		left: '20%',
		width: '100px',
		margin: 'auto',
		borderTop: '3px solid #66FCF1',
		marginBottom: '50px'
	},
	faq: {
		background: '#222629',
		padding: '100px 0',
	},
	faqSlots: {
		textAlign: 'left',
		padding: '0 50px'
	},
	input: {
		padding: '10px',
		minWidth: '300px',
		margin: '10px 30px'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
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
		margin: "100px 200px",
		borderRadius: "25px",
		border: "2px solid #2f3538",
		backgroundColor: "#c4c4c4",
	  },
	
	  flexContainer: {
		padding: 0,
	
		backgroundColor: "#2f3538",
		color: "#2f3538",
	
		margin: "0 auto",
	  },
	
	  backgroundColor: {
		backgroundColor: "#2f3538",
		color: "#2f3538",
	  },
	
	  boldTitle: {
		top: "300px",
		color: "white",
		fontWeight: "bold",
		fontSize: 50,
		},
	
	  h2: {
		color: "white",
		marginBottom: 10,
		fontSize: 30,
	  },
	
	  h3: {
		color: "white",
		marginRight: 100,
		marginLeft: 100,
		width: "fit-content",
	
		fontSize: 15,
		backgroundColor: "#2f3538",
		maxWidth: "1000px",
	  },
	
	
	  topdataleft: {
		width:"300x",
		height:"200px",
		position: "absolute",
		left: "50px",
		borderRadius: "25px",
		border: "2px solid #2f3538",
		top: "115px",
	
	  },
	
	  bottomdataleft: {
		width:"400x",
		height:"135px",
		position: "absolute",
		left: "50px",
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
		right: "50px",
		top: "115px", 
			borderRadius: "25px",
		border: "2px solid #2f3538",
	
	  },
	
	  bottomdataright: {
		width:"130x",
		height:"108px",
		position: "absolute",
		right: "50px",
		top: "345px", 
	
	  },
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

const AccordionDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiAccordionDetails);

const ColAccordion = withStyles({
	root: {
		backgroundColor: 'white',
		fontSize: '20px',
		color: 'black',
		border: '0px solid rgba(0, 0, 0, .125)',
		boxShadow: '5px 5px 5px black',
		borderRadius: '20px',
		'&:not(:last-child)': {
			borderBottom: 0,
		},
		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			margin: 'auto',
		},
	},
	expanded: {},
})(MuiAccordion);

const ColAccordionSummary = withStyles({
	root: {
		backgroundColor: '#66FCF1',
		borderBottom: '0px solid rgba(0, 0, 0, .125)',
		marginBottom: 0,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {
	},
})(MuiAccordionSummary);

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
      <img src={BottomSection} style = {styles.bottom} alt = "Bottom Panel"/>
      </div>
      <StyledButton>Confirm</StyledButton>
      </div>
      </div>
      </div>
			</div >
		);
	}
}
export default withStyles(styles)(SimulatorOther);
