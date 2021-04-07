import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import BlogCard from '../components/BlogCard'
import blogfake1 from '../images/blogfake1.jpg';
import blogfake2 from '../images/blogfake2.jpg';
import blogfake3 from '../images/blogfake3.jpg';
import HomeCarousel from '../components/Carousel';
import TeamMemberJoin from '../images/teammemberjoin.jpg'
import blogbackground from '../images/blogbackgroud.PNG'

const styles = {
    button: {
        borderColor: '#66FCF1',
        backgroundColor: '#66FCF1',
        border: '1px solid',
        color: '#444f56',
        "&:hover": {
            backgroundColor: '#222629',
            color: '#66FCF1',
            borderColor: '#66FCF1',
        },
    },

    bigButton: {
        borderColor: '#66FCF1',
        backgroundColor: '#66FCF1',
        border: '1px solid',
        color: '#444f56',
        "&:hover": {
            backgroundColor: '#222629',
            color: '#66FCF1',
            borderColor: '#66FCF1',
        },
        fontSize: '20px'
    },

    buttonContainer: {
        width: '100%'
    },


    imageBox: {
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        backgroundImage: "url('https://9to5mac.com/wp-content/uploads/sites/6/2020/01/Coronavirus.jpg?quality=82&strip=all')",
        backgroundSize: "cover",

        color: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: "0.9",
        boxShadow: "inset 0 0 0 100vw rgba(0,0,0,0.5)",
    },

    teamPage: {
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        backgroundSize: "cover",
        color: "white",
        height: "120vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: "0.9",
        boxShadow: "inset 0 0 0 100vw rgba(0,0,0,0.5)",
    },

    aboutSection: {
        padding: '100px 110px 100px 110px',
        backgroundColor: '#222D3C', /* Or #1C2531 ? */
        overflow: 'hidden',

        " p": {
            fontSize: '18px',
        }
    },

    blogSection: {
        height: "65vh",
        padding: '20px 200px 60px 200px',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        

    },

    recent: {
        color: 'black',
        //fontStyle: 'strong',
        fontSize: "40px",
        marginTop: "30px",
        marginBottom:"50px"
        
    },

};


class Home extends Component {

    

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <div className={classes.imageBox}>
                    <div className="header-text">
                        <h1 style={{ fontSize: '50px', marginBottom: "30px"}}>Interactive Disease Simulation</h1>
                        <h5 style={{marginBottom: "30px"}}>Bring a fresh approach to the challenge of modeling the spread of pandemics</h5>
                        <Button className={classes.bigButton} variant="contained" color="inherit" href="/simulator">
                            Explore Simulation
                        </Button>
                    </div>
                </div>

                <HomeCarousel/>

                <div className={classes.blogSection} style={{ backgroundImage:`url(${blogbackground})`}}>
                    <Typography className={classes.recent}>
                        Checkout Our Blogs
                    </Typography>

                    <Grid container spacing={10} >
                        <Grid item xs={4}>
                            <BlogCard
                            imgURL = {blogfake1}
                            title = {"Ex-CDC head claims without evidence Covid-19 began in a China lab"}
                            brief = {"The crisis in Papua New Guinea is a reminder that the virus will keep wreaking havoc until the whole world is vaccinated."}/>
                            

                        </Grid>
                        <Grid item xs={4}>
                            <BlogCard                            
                            imgURL = {blogfake2}
                            title = {"This Island Nation Had Zero Covid Cases for Months"}
                            brief = {"The crisis in Papua New Guinea is a reminder that the virus will keep wreaking havoc until the whole world is vaccinated."}/>
                            
                        </Grid>
                        <Grid item xs={4}>
                            <BlogCard                            
                            imgURL = {blogfake3}
                            title = {"White House reviews whether to lift intellectual property shield on Covid-19 vaccines"}
                            brief = {"The crisis in Papua New Guinea is a reminder that the virus will keep wreaking havoc until the whole world is vaccinated."}/>

                        </Grid>
                    </Grid>
                </div>
                <div className={classes.teamPage} style={{ backgroundImage:`url(${TeamMemberJoin})`}}>
                    <div className="header-text">
                        <h1 style={{ fontSize: '50px', marginBottom: "30px"}}>We Are Delineo</h1>
                        <h5 style={{marginBottom: "30px"}}>Bring a fresh approach to the challenge of modeling the spread of pandemics</h5>
                        <Button className={classes.bigButton} style={{marginRight: "30px"}} variant="contained" color="inherit" href="/team">
                            Meet the Team
                        </Button>
                        <Button className={classes.bigButton} style={{marginLeft: "30px"}} variant="contained" color="inherit" href="/teamapplication">
                            Join the Team
                        </Button>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Home);