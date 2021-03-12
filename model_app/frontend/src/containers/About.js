import React from "react";
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import faqData from '../const/faqData';
import bgImg from '../images/Delineo-About.gif';
import InfoBlock from '../components/InfoBlock';

const styles = {
	button: {
		borderColor: '#66FCF1',
		backgroundColor: '#66FCF1',
		border: '1px solid',
		"&:hover": {
			backgroundColor: 'transparent',
			color: '#66FCF1',
			borderColor: '#66FCF1',
		},
	},

	w3Image: {
		maxWidth: '22vw',
		height: '180px',
	},

	w3DisplayContainer: {
		width: '100%',
		display: 'flex',
		paddingBottom: '50px',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap'
	},

	buttonContainer: {
		width: '100%',
		alignContent: 'center',
		paddingTop: '0%',
		paddingBottom: '5%',
	},

	cardBackground: {
		backgroundColor: '#222629',
		height: '100%',
		width: '100vh',
		minHeight: '100%',
		minWidth: '100%',
		margin: '0',
		alignContent: 'center',
		paddingBottom: '5%',
	},

	cardGreenBackground: {
		marginTop: '0%',
		marginLeft: 'auto',
		marginRight: 'auto',
		backgroundColor: '#1b4441c2',
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
	},

	paragraph: {
		color: 'white',
		paddingLeft: '5%',
		paddingRight: '5%',
	},

	thumbnail: {
		width: '22vw'
	},

	title: {
		position: 'absolute',
		top: '230px',
		left: '169px'
	},

	subtitle: {
		position: 'absolute',
		top: '320px',
		left: '169px',
		fontSize: '18px'
	},

	block: {
		margin: '50px'
	},
	border: {
		position: 'absolute',
		top: '300px',
		left: '169px',
		width: '100px',
		margin: 'auto',
		borderTop: '3px solid #66FCF1',
		marginBottom: '50px'
	}
}

const ColoredAccordion = withStyles({
	root: {
		backgroundColor: '#1b4441c2',
		fontSize: '20px',
		color: '#66FCF1'



	},
})(Accordion);

const AccordionDetails = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiAccordionDetails);

const ColAccordion = withStyles({
	root: {
		backgroundColor: '#444F51',
		fontSize: '20px',
		color: 'white',
		border: '0px solid rgba(0, 0, 0, .125)',
		boxShadow: 'none',
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
		backgroundColor: 'rgba(0, 0, 0, .4)',
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
	expanded: {},
})(MuiAccordionSummary);

class About extends React.Component {
	constructor() {
		super();
		this.MapDescription = "The Johns Hopkins Coronavirus Resource Center (CRC) is a continuously updated source of COVID-19 data and expert guidance. We aggregate and analyze the best data available on COVID-19—including cases, as well as testing, contact tracing and vaccine efforts—to help the public, policymakers and healthcare professionals worldwide respond to the pandemic.";
		this.SimulationDescription = "Viruses, such as the one that causes COVID-19, spread quickly through large cities because of a complex web of interactions between people taking place in a densely populated area. But how viruses move from person to person in smaller, rural communities is less well understood, resulting in public health and economic decisions that are made on the basis of scant information and overgeneralized modeling. The Delineo project is developing a distributed programming environment to run the model over large numbers of computers to scale up the areas that can be accurately modeled.";
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.cardBackground}>
				<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
				<div > {/*className={classes.cardGreenBackground}*/}

					<Typography variant="h3" component="h2" className={classes.title}>
						ABOUT DELINEO
					</Typography>
					<div className={classes.border}></div>
					<Typography variant="subtitle" component="h2" className={classes.subtitle}>
						Disease Modeling Simulation at Johns Hopkins University
					</Typography>
					<img src={bgImg} alt="background" width='100%' height="700vh" />

					<InfoBlock background={'C4C4C4'} subject={'visualization'} />
					<InfoBlock background={'4A4E51'} subject={'stimulation'} />

				</div>
				<div className="w3-container w3-padding-32 w3-grey" id="contact" >
					<h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Frequently Asked Questions</h3>

					{faqData.map((faq) => {
						return (
							<div style={{ padding: '10px' }}>
								<ColAccordion>
									<ColAccordionSummary
										expandIcon={<ExpandMoreIcon />}
										aria-controls="Model Param-content"
										id="Model Param-header"
									>
										{faq.question}
									</ColAccordionSummary>
									<AccordionDetails>
										<Typography>
											{faq.answer}
										</Typography>
									</AccordionDetails>

								</ColAccordion>
							</div>)
					})}
				</div>




				<div className="w3-container w3-padding-32" id="contact" >
					<h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
					<p className={classes.paragraph}>Let's get in touch!</p>
					<form style={{ padding: '0 50px' }}>
						<input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
						<input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" />
						<input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" />
						<input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" />
						<button className="w3-button w3-black w3-section" type="submit">
							<i className="fa fa-paper-plane"></i> SEND MESSAGE
					    </button>
					</form>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(About);
