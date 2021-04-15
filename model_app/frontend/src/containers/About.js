import React, { Component } from "react";
import Accordion from '@material-ui/core/Accordion';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '../components/StyledButton';
import faqData from '../const/faqData';
import bgImg from '../images/Delineo-About.gif';
import InfoBlock from '../components/InfoBlock';
import SendIcon from '@material-ui/icons/Send';

const styles = {

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
		backgroundColor: 'white',
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
		backgroundColor: 'black',
		width: '100%',
		alignSelf: 'center',
		alignItems: 'center',
	},

	underline: {
		width: '200px',
		margin: 'auto',
		borderTop: '3px solid #66FCF1',
		marginBottom: '30px'
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
		top: '210px',
		left: '169px',
		letterSpacing: '1.5px',
		textShadow: '2px 2px 15px black'
	},

	subtitle: {
		position: 'absolute',
		top: '320px',
		left: '169px',
		fontSize: '18px',
		textShadow: '2px 2px 10px black'
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
	contactSection: {
		paddingTop: '70px'
	},
	description: {
		fontSize: '16px',
		letterSpacing: '1.2px',
		color: 'black',
		paddingBottom: '50px',
		paddingTop: '50px'
	},
}

const ColoredAccordion = withStyles({
	root: {
		backgroundColor: 'black',
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
			// boxShadow: 'inset 0px 0px 5px black',
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

class About extends Component {
	constructor() {
		super();
		this.MapDescription = "The Johns Hopkins Coronavirus Resource Center (CRC) is a continuously updated source of COVID-19 data and expert guidance. We aggregate and analyze the best data available on COVID-19—including cases, as well as testing, contact tracing and vaccine efforts—to help the public, policymakers and healthcare professionals worldwide respond to the pandemic.";
		this.SimulationDescription = "Viruses, such as the one that causes COVID-19, spread quickly through large cities because of a complex web of interactions between people taking place in a densely populated area. But how viruses move from person to person in smaller, rural communities is less well understood, resulting in public health and economic decisions that are made on the basis of scant information and overgeneralized modeling. The Delineo project is developing a distributed programming environment to run the model over large numbers of computers to scale up the areas that can be accurately modeled.";
	}

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<div className={classes.cardBackground}>
					<div >

						<Typography variant="h2" component="h2" className={classes.title}>
							ABOUT DELINEO
					</Typography>
						<div className={classes.border}></div>
						<Typography variant="h2" component="h2" className={classes.subtitle}>
							Disease Modeling Simulation at Johns Hopkins University
						</Typography>
						<img src={bgImg} alt="background" width='100%' height="700vh" />

						<InfoBlock background={'white'} subject={'visualization'} />
						<InfoBlock background={'#d5d7db'} subject={'stimulation'} />

					</div>
					<div className={classes.faq} id="contact">
						<Typography variant="h3" component="h2" style={{ marginBottom: '-10px', marginTop: '50px' }}>
							FAQ
					</Typography>
						<div className={classes.underline}></div>
						<div className={classes.faqSlots}>

							{faqData.map((faq) => {
								return (
									<div style={{ padding: '10px' }}>
										<ColAccordion>
											<ColAccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="Model Param-content"
												id="Model Param-header"
												style={{ padding: '0 50px', fontWeight: '600' }}
											>
												{faq.question}
											</ColAccordionSummary>
											<AccordionDetails style={{ padding: '0 50px' }}>
												<Typography className={classes.description}>
													{faq.answer}
												</Typography>
											</AccordionDetails>

										</ColAccordion>
									</div>)
							})}
						</div>
					</div>




					<div className={classes.contactSection} id="contact" >
						<Typography variant="h3" component="h2" style={{ marginBottom: '-10px', color: 'black' }}>
							Contact Us!
					</Typography>
						<div className={classes.underline}></div>
						<Typography varient='h3' component="h2" style={{ color: 'black' }}>
							Let's get in touch!
					</Typography>
						<Typography varient='h1' component="h2" style={{ color: 'black' }}>

							<form style={{ padding: '0 50px' }} className={classes.form} noValidate autoComplete="off">
								<input className={classes.input} type="text" placeholder="Name" required name="Name" />
								<input className={classes.input} type="text" placeholder="Email" required name="Email" />
								<input className={classes.input} type="text" placeholder="Subject" required name="Subject" />
								<input className={classes.input} type="text" placeholder="Comment" required name="Comment" />

								<Button endIcon={<SendIcon />} className={classes.button} type="submit" size="large" varient='contained'>
									SEND MESSAGE
								</Button>
							</form>
						</Typography>
					</div>
				</div >
			</React.Fragment>
		);
	}
}
export default withStyles(styles)(About);
