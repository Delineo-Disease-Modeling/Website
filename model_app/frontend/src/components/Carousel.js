import React from 'react';
import Button from '@material-ui/core/Button';
import Carousel from 'react-bootstrap/Carousel'
import { makeStyles } from '@material-ui/core/styles';
import homepagecode from '../images/homepagecode.jpg'
import homepageml from '../images/homepageml.webp'

const useStyles = makeStyles({
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

    buttonContainer: {
        width: '100%'
    },
})


const HomeCarousel = function HomeCarousel() {

    const classes = useStyles();

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="700"
                    src={homepagecode}
                    alt="First slide"
                    style = {{opacity: 0.5}}
                    
                />
                <Carousel.Caption>
                    <h1 style = {{marginBottom: 20}}>Simulator</h1>
                    <h5 style = {{marginBottom: 30}}>The Delineo Disease Modeling Project is working to bring a fresh approach to the challenge of modeling the spread of pandemics. The project draws from a diverse set of academic fields, using knowledge and principles from computer science, applied mathematics, and public health to create a much more realistic model of disease spread. </h5>
                    <div className={classes.buttonContainer}>
                                <Button className={classes.button} variant="contained" color="inherit" href="/about">
                                    Learn More
                            </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height="700"
                    src={homepageml}
                    alt="Second slide"
                    style = {{opacity: 0.5}}
                />
                <Carousel.Caption>
                    <h1 style = {{marginBottom: 20}}>Machine Learning</h1>
                    <h5 style = {{marginBottom: 30}}>The problem of how disease moves is fundamentally a question of how people move. Leveraging mobility data provided by SafeGraph and XMode, our team is able to create realistic population movements informed by real world data. Our approach to the problem of movement utilizes statistical and machine learning methods from prior literature to form movement patterns that capture the broad range of ways that people move.</h5>
                    <div className={classes.buttonContainer}>
                                <Button className={classes.button} variant="contained" color="inherit" href="/about">
                                    Learn More
                            </Button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default HomeCarousel;