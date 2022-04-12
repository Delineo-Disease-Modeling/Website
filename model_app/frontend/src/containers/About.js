import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import { withStyles } from '@mui/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'
import faqData from '../const/faqData';
import bgImg from '../images/Delineo-About.gif';
import InfoBlock from '../components/InfoBlock';
import StyledButton from "../components/StyledButton";

const styles = {
	cardBackground: {
		backgroundColor: '#222629',
		height: '100%',

		minHeight: '100%',
		minWidth: '100%',
		margin: '0',
		alignContent: 'center',
		paddingBottom: '100px'
	},
	underline: {
		width: '200px',
		margin: 'auto',
		borderTop: '3px solid #66FCF1',
		marginBottom: '30px'
	},
	heading: {
		background: `no-repeat center/100% url(${bgImg})`,
		backgroundColor: '#222629',
		padding: '50px 25% 50px 70px',
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
		padding: '50px 10% 100px 10%',
		maxWidth: '2000px',
		margin: 'auto'
	},
	faqSlots: {
		textAlign: 'left',
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
		letterSpacing: '0.75px',
		color: 'black',
		paddingBottom: '50px',
		paddingTop: '50px',
	},
	contactCard: {
		paddingBottom: '30px',
		backgroundColor: 'rgba(125, 125, 125, 0.50)',
		width: '500px',
		margin: 'auto',
	}
}

class About extends React.Component {
	constructor() {
		super();
		this.MapDescription = "The Johns Hopkins Coronavirus Resource Center (CRC) is a continuously updated source of COVID-19 data and expert guidance. We aggregate and analyze the best data available on COVID-19 - including cases, as well as testing, contact tracing and vaccine efforts - to help the public, policymakers and healthcare professionals worldwide respond to the pandemic.";
		this.SimulationDescription = "Viruses, such as the one that causes COVID-19, spread quickly through large cities because of a complex web of interactions between people taking place in a densely populated area. But how viruses move from person to person in smaller, rural communities is less well understood, resulting in public health and economic decisions that are made on the basis of scant information and overgeneralized modeling. The Delineo project is developing a distributed programming environment to run the model over large numbers of computers to scale up the areas that can be accurately modeled.";
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.cardBackground}>
				<div className={classes.heading} id="heading-id">
					<Typography variant='h6' align="left" color='white'>
						About Delineo
					</Typography>
					<Typography variant='h2' align="left" id="subtitle-id" color='white'>
						Disease Modeling Simulation at Johns Hopkins University
					</Typography>
				</div>

				<InfoBlock subject={'simulation'} background='#222629' />

				<div className={classes.faq}>
					<Typography variant="h3" component="h3" style={{ marginBottom: '-10px', marginTop: '50px' }}>
						FAQ
					</Typography>
					<div className={classes.underline}></div>
					<div className={classes.faqSlots}>

						{faqData.map((faq, i) => {
							return (
								<div style={{ padding: '10px' }} key={i + 'faq'}>
									<MuiAccordion>
										<MuiAccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="Model Param-content"
											id="Model Param-header"
											style={{ padding: '0 50px', fontWeight: '600' }}
										>
											{faq.question}
										</MuiAccordionSummary>
										<MuiAccordionDetails style={{ padding: '0 50px', backgroundColor: '#222629' }}>
											<Typography className={classes.description} style={{ color: '#ffffff' }}>
												{faq.answer}
											</Typography>
										</MuiAccordionDetails>

									</MuiAccordion>
								</div>)
						})}
					</div>
				</div>
				<div id="contact" style={{ backgroundColor: '#222629', padding: '50px 0' }}>
					<Paper style = {{backgroundColor: 'rgba(125, 125, 125, 0.50)'}} className={classes.contactCard} id="contact-card-id">
						<Typography variant="h7" component="h2" align="center">
							Contact Us!
						</Typography>
						<Typography variant='subtitle1' color='white' style={{paddingTop: '5px'}}>
							Let's get in touch!
						</Typography>
						<Typography varient='h1' component="h2" style={{ color: '#222629' }}>

							<form style={{ padding: '0 50px' }} className={classes.form} noValidate autoComplete="off">
								<input className={classes.input} id="input-id" type="text" placeholder="Name" required name="Name" />
								<input className={classes.input} id="input-id" type="text" placeholder="Email" required name="Email" />
								<input className={classes.input} id="input-id" type="text" placeholder="Subject" required name="Subject" />
								<input className={classes.input} id="input-id" type="text" placeholder="Comment" required name="Comment" />

								<StyledButton endIcon={<SendIcon />} type="submit" >
									SEND MESSAGE
								</StyledButton>
							</form>
						</Typography>
					</Paper>
				</div>
			</div >
		);
	}
}
export default withStyles(styles)(About);
