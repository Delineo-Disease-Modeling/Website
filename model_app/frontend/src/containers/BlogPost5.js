import React from "react";
// import { useHistory } from "react-router-dom";
import "./BlogPost.css";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import FacebookIcon from "@material-ui/icons/Facebook";
import ShareIcon from "@material-ui/icons/Share";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Grid } from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { TwitterButton, EmailButton } from "react-social";
import TwitterIcon from "@material-ui/icons/Twitter";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/styles";
import christian from "../images/Christian Bakhit.jpg";
import fullstack from "../images/fullstack.png";
import fullstack2 from "../images/fullstack2.png";
import fullstack3 from "../images/fullstack3.png";
import simulation from "../images/simulation.png";
const useStyles = makeStyles((theme) => ({
    center: {
        justifyContent: "center",
        alignItems: "center",
        //marginBottom: "-50%",
        //maxWidth: "50%",
    },

    top: {
        display: "inline-block",
        marginTop: "-45px",
    },
    credit: {
        color: "black",
        marginTop: "-2%",
        marginBottom: "4%",
    },
    avatar: {
        display: "inline",
        marginRight: "0.7%",
        height: "30px",
        width: "30px",
        borderRadius: "50%",
    },
    text: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        lineHeight: "1.5",
        //padding: "20px 50px",
        //fontSize: "14pt",
        color: "black",
    },
    quote: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "right",
        lineHeight: "1.5",
        //padding: "20px 50px",
        //fontSize: "14pt",
        color: "black",
    },
    hyperlink: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        lineHeight: "1.5",
        color: "black",
        textIndent: "40px",
    },
}));

const post5url =
    "https://covidweb.isi.jhu.edu/developmentblog/Delineo-A-COVID-19-Simulation";

const message =
    "Check out this article from the Delineo Disease Modeling Project";

function Post5(props) {
    // let history = useHistory();
    const classes = useStyles();
    return (
        <div className="App">
            <div className="center">
                <figure>
                    <div>
                        <img
                            width="50%"
                            height="10%"
                            src="/blogpostPic9.png"
                            alt="Delineo Icon"
                            title="Delineo Icon"
                        />
                    </div>
                </figure>
                <h2
                    style={{
                        color: "black",
                        fontWeight: "bold",
                        marginTop: "2%",
                        marginBottom: "-1%",
                    }}
                >
                    Welcome to Delineo!                </h2>
                <div>
                    <div
                        className="relative m-r-10 w-50 h-50 b-r-full"
                        style={{
                            backgroundImage:
                                'url("https://webassets.mongodb.com/_com_assets/cms/Siya-adfnai3e2j.jpg")',
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />

                    <h6>
                        <img
                            alt="Christian Bakhit"
                            src={christian}
                            className={classes.avatar}
                            variant="circle"
                        />
                        Christian Bakhit, Mung Yao Jia, Jiwoo Noh &#8226; May 2023
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <IconButton aria-label="share" {...bindTrigger(popupState)}>
                                        <ShareIcon style={{ color: "black" }} />
                                    </IconButton>
                                    <Menu
                                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                                        {...bindMenu(popupState)}
                                    >
                                        <MenuItem
                                            style={{ color: "black" }}
                                            onClick={popupState.close}
                                        >
                                            <TwitterButton message={message} url={post5url}>
                                                <TwitterIcon fontSize="small" />
                                            </TwitterButton>
                                        </MenuItem>
                                        <MenuItem
                                            style={{ color: "white" }}
                                            onClick={popupState.close}
                                        >
                                            <EmailButton message={message} url={post5url}>
                                                <EmailIcon fontSize="small" />
                                            </EmailButton>
                                        </MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </h6>
                    <br />
                </div>
                <Grid>
                    <p className={classes.text}>
                        The team works as a student group under the direction of Dr. Dahbura, with each team bolstering a student staff of ~6 students!

                        Below are a dive into the methods and development history of every team currently with Delineo.

                        https://covidweb.isi.jhu.edu/
                    </p>
                    <p className={classes.text}>
                        The beauty of the Delineo simulation is that it uses a modular
                        approach to simulate the infectiousness of COVID-19 by building on
                        different points of interest. In a real-world scenario, the
                        infectiousness of COVID-19 will vary city by city based on the
                        number of grocery stores, gyms, places of worship and other POI's.
                        These all contribute to the spread of disease differently given the
                        variation in density of infectors, different air flow rates,
                        ventilation, as well as a number of other factors.
                    </p>
                    <h2 style={{
                        color: "black",
                        fontWeight: "bold",
                        marginTop: "2%",
                        marginBottom: "-1%",

                    }}> What is Delineo?</h2>
                    <p className={classes.text}>
                        The Delineo Disease Modeling Project is working to bring a fresh approach to the challenge of modeling the spread of pandemics. The project draws from a diverse set of academic fields, using knowledge and principles from computer science, applied mathematics, and public health to create a far more realistic model of disease spread. Using geolocation mobile phone data, the Delineo project seeks to model disease spread in communities ranging from sparsely inhabited rural towns to densely populated urban megacities. The goal of our project is to create a massively parallel and highly scalable system that can be run across computing platforms to create a virtual world in which the spread of a disease can be observed and measured, along with studying the impact of non-pharmaceutical interventions (NPI’s) and different types of events on the spread of the disease. The model envisions populations in terms of extremely localized and specific “modules” comprising of people, their dwellings, and shared community spaces.
                    </p>
                    <h2 style={{ color: "black", fontWeight: "bold", marginTop: "2%" }}>  What does Delineo’s simulator do?           </h2>
                    <p className={classes.text}>
                        Our simulator attempts to realistically capture the mechanisms of disease spread within a diverse range of geographies, ranging from small rural communities to large cities. The simulator works in two parts. Fundamentally, the question of disease movement is a question of population movement. Using geolocation mobility data from SafeGraph, realistic population movement dynamics are created. Then, a statistical disease driver uses the population movement information to predict disease spread.
                    </p>
                    <h2 style={{ color: "black", fontWeight: "bold", marginTop: "2%" }}>  What data do we use?         </h2>
                    <p className={classes.text}>
                        Our simulator makes use of census data and publicly available datasets to synthesize populations with the correct socioeconomic, gender, and comorbidity population distributions. Our movement patterns are informed by anonymized mobile cell phone data provided by SafeGraph.
                    </p>
                    <h1 style={{ color: "black", fontWeight: "bold", marginTop: "2%" }}>  The Team         </h1>
                    <h2 style={{ color: "black", fontWeight: "bold", marginTop: "2%" }}>  Fullstack      </h2>
                    Sure! Here's the updated code with bullet points using the li tag:

                    less

                    <p className={classes.text}>
                        Members of the fullstack team work throughout the stack. Our web application is built using the MERN stack (MongoDB, Express, ReactJS, NodeJS) and Unity Webgl. Members of this team also manage and access our geolocation data.

                        This team has two main sections:

                        <ul>
                            <li>Backend and Main Simulator:
                                <ul>
                                    <li>This team is in charge of Delineo’s servers hosted on the Hopkins network. They ensure that the backend and databases are kept up to date and online.</li>
                                    <li>Students are also experienced in React, a framework created by Facebook. Leveraging the MERN stack, students on this team are familiar with both UNIX environments and web development.</li>
                                </ul>
                            </li>
                            <li>Delineo Simulator:
                                <ul>
                                    <li>Created the Delineo Simulator, where epidemiologists can try many combinations of different interventions and simulator settings and get returned information on population statistics so that they can better understand the result of their choices.</li>
                                </ul>
                            </li>
                        </ul>
                        <p className={classes.text}>
                            Anytown USA:
                            <ul>
                                <li>Developed in Unity and C#, this simulator serves as a first stepping stone for people interested in disease modeling. Playing as a ‘mayor’ of the small town, AnyTown USA, players are able to implement different interventions to counteract the spread of the disease in the game space.</li>
                                <li>Random events occur to mimic events out of the mayor’s control happening in real life, and the mayor has to respond accordingly in the best interest of the town.</li>
                            </ul>
                        </p>
                    </p>
                    <img
                        src={fullstack}
                        style={{
                            width: "50%",
                            borderRadius: "10px",
                            marginBottom: "2%",
                        }}
                        alt="fullstack"
                    />
                    <img
                        src={fullstack2}
                        style={{
                            width: "50%",
                            borderRadius: "10px",
                            marginBottom: "2%",
                        }}
                        alt="fullstack2"
                    />
                    <img
                        src={fullstack3}
                        style={{
                            width: "50%",
                            borderRadius: "10px",
                            marginBottom: "2%",
                        }}
                        alt="fullstack3"
                    />
                    <h2 style={{ color: "black", fontWeight: "bold", marginTop: "2%" }}>  Simulation      </h2>
                    <p className={classes.text}>
                        Wells-Riley Equation:
                        <li>Delineo uses the Wells-Riley equation to calculate infection rates for people in facilities.</li>
                        <li>The Wells-Riley Equation was developed by William F. Wells and his colleagues during a measles outbreak in 1978 based on the ‘quantum of infection’ as proposed by Richard L. Riley. The equation was created to determine the probability of susceptible individuals being infected by an airborne transmissible disease in a room when other infectors are present.</li>
                        <li>To get the probability of infection, we can put in variables including a number of infectors, average breathing rate, quanta generation rate, exposure time, and airflow rate from HVAC systems.</li>
                        <li>The equation is valuable because of its ability to evaluate the transmission of airborne diseases, like COVID-19, between individuals in defined spaces rather than the spread through a general population.</li>
                    </p>

                    <img
                        src={simulation}
                        style={{
                            width: "50%",
                            borderRadius: "10px",
                            marginBottom: "2%",
                        }}
                        alt="simulation"
                    />

                    <p className={classes.text}>
                        <ul>
                            <li>The simplistic nature provides us with scalability and modular growth. Our research allows us to perfect the result of infectiousness in different POIs using the Wells-Riley equation. We can then model any town in the US by ‘building out’ the cities - using our research we can represent all the POIs of the town. Combining the Wells-Riley equation and cross-referencing census and geo-location data, Delineo can be used to build an accurate model of any town in the US and the probability of infection by airborne COVID-19.</li>
                            <li>Wells-Riley Equation enables us to use quantifiable variables to investigate the transmission of COVID-19 with scalability. We aim to provide a more accurate picture to the public for understanding how COVID-19 is transmitted and how interventions will affect the transmission.</li>
                        </ul>
                        <ul>AWS SimScapeWeaver
                            <li>AWS SimScape Weaver is a managed service offering from AWS which enables large-scale dynamic entity simulation; Weaver achieved General Availability (GA) at Re:Invent in Q4 2022. SimScapeWeaver provisions the underlying infrastructure, and handles entity management with custom simulation logic and partition configuration provided by customers and partners.</li>
                            <li>This project cohesively leverages SimScape Weaver’s capability to scale spatial simulations and Delineo’s capability to accurately model diseases to study the spread of disease at an unprecedented level of granularity.</li>
                            <li>SimScape uses a social force model to guide people movement between facilities in spatial simulation.</li>
                            <li>Explanation of the Simulation:</li>
                            <li>Our simulator attempts to realistically capture the mechanisms of disease spread within a diverse range of geographies, ranging from small rural communities to large cities. We simulate a population with various characteristics (age, gender, underlying medical conditions, race, etc.) randomly based on census data to view disease infections over two months. The population travels through different facilities and places of interest (POIs) and are infected based on the Wells-Riley Equation. We also study the effects of different interventions such as mask-wearing, stay and home mandates and vaccinations.</li>
                        </ul>
                    </p>
                    <h2 style={{ color: "black", fontWeight: "bold", marginTop: "2%" }}>  Algorithms      </h2>
                    <p className={classes.text}>
                        <strong>Algorithms team aims:</strong> To develop accurate models of the diseased population movement within the target location. Using the raw data from SafeGraph, we work as two sub-teams, in which the first team constructs a clustering algorithm and the second team generates realistic household samples that abide by the “sanity rules.”
                        <br />
                        <br />
                        <strong>1) Clustering:</strong>
                        <br />
                        The best way to optimize realistic disease models is by cutting down on the number of people that need to be simulated. However, we can’t just choose to simulate one city or town at a time, as people often move between city and state lines. This is when we had to look into clustering for our data analysis and simulation.
                        <br />
                        <br />
                        For our simulation, we wanted to create clusters of existing populations, where we minimized the number of people entering or leaving the cluster, while also keeping the number of people within the cluster low. This allows us to simulate and work with each cluster individually, as the chance of disease spreading between clusters would be extremely low and could be ignored for now.
                        <br />
                        <br />
                        In order for us to generate clusters, we needed to figure out a way to group places together that would satisfy our two criteria. If people frequently move between two places, then those places should be grouped together in the same cluster. Using movement patterns from our real-world dataset, we were able to generate clusters for a few small sample populations. These clusters and populations were then used for some simulations.
                        <br />
                        <br />
                        <strong>2) Household generation:</strong>
                        <br />
                        Another major part of the Delineo algorithm is assigning individuals to households. Since Safegraph data does not contain information on detailed demographics of each household, we needed to generate new households within Delineo and assign people to them.
                        <br />
                        <br />
                        In order for realistic results, we also constructed sanity rules so that the household assignments make sense in real life. For example, we would want to exclude the possibility of a minor living alone. There is also a low possibility of having households with more than 6 people or having households with large age gaps.
                        <br />
                        <br />
                        <strong>With these two main components,</strong> we are currently working on creating movement patterns among places of interest!
                    </p>
                    <div style={{ textAlign: "center" }}>
                        <h2 style={{ color: "black", fontWeight: "bold", marginBottom: "1rem" }}>
                            History
                        </h2>
                        <ul style={{ listStylePosition: "inside", marginLeft: '1rem' }}>
                            <li>August 2019 - May 2020 - Dr. Dahbura and Mathias Insley first take on the topic of disease modeling</li>
                            <li>First versions of the Website, Simulation, and Algorithms start being developed</li>
                            <li>First time reaching out to Safegraph for data</li>
                            <li>AnyTown starts being developed</li>
                            <li>August 2020 - May 2021</li>
                            <li>Second development year, focusing on improving the simulation by adding more interventions as options, and working on first versions of the Delineo main simulator</li>
                            <li>August 2021 - May 2022</li>
                            <li>Microsoft Integration starts, and we start building a Delineo simulator that can be used in many different use cases</li>
                            <li>Runtime issue comes up for the first time, and work on improving current simulator starts</li>
                            <li>August 2022 - May 2023</li>
                            <li>Start of visualization tools to validate the results</li>
                            <li>Delineo simulation gets re-coded to serve as a book keeping software compared to generating population data and households during each simulation run</li>
                            <li>Amazon Integration with Simscape, a 3D modeling software to be able to visualize different simulations</li>
                            <li>Delineo simulator is starting to take shape, and first version is available to the public</li>
                        </ul>
                        <h2 style={{ color: "black", fontWeight: "bold", marginTop: "2rem" }}>
                            Special Thanks
                        </h2>
                        <ul style={{ listStylePosition: "inside", marginLeft: '1rem' }}>
                            <li>Professional Staff</li>
                            <li>Dr. Kimia</li>
                            <li>Dr. Madooei</li>
                            <li>Dr. Klein</li>
                            <li>Dr. Dahbura</li>
                        </ul>
                        <p>These professors serve as student mentors and guides in our journey!</p>
                        <ul style={{ listStylePosition: "inside", marginLeft: '1rem' }}>
                            <li>Collaborators:</li>
                            <li>University of Tuskuba</li>
                            <li>Microsoft</li>
                            <li>Gravy Analytics</li>
                            <li>Amazon Web Services</li>
                            <li>Safegraph</li>
                        </ul>
                        <p>The team works as a student group under the direction of Dr. Dahbura, with each team bolstering a student staff of ~6 students!</p>
                        <p>Below are a dive into the methods and development history of every team currently with Delineo.</p>
                        <a href="https://covidweb.isi.jhu.edu/">https://covidweb.isi.jhu.edu/</a>
                    </div>
                    <Toolbar></Toolbar>
                </Grid>
            </div >
        </div >
    );
}
export default Post5;
