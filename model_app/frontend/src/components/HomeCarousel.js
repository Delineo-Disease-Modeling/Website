import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { makeStyles } from '@mui/styles';
import homepagecode from '../images/simulator_background.jpg'
import homepageml from '../images/ML_background.jpg'
import StyledButton from './StyledButton';

const useStyles = makeStyles({
  buttonContainer: {
    width: '100%'
  },
})


const HomeCarousel =  () => {
  const classes = useStyles();

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="700"
          src={homepagecode}
          alt="First slide"
          style={{ opacity: 0.5 }}

        />
        <Carousel.Caption>
          <h1 style={{ marginBottom: 20 }}>Simulator</h1>
          <h5 style={{ marginBottom: 30 }}>The Delineo Disease Modeling Project is working to bring a fresh approach to the challenge of modeling the spread of pandemics. The project draws from a diverse set of academic fields, using knowledge and principles from computer science, applied mathematics, and public health to create a much more realistic model of disease spread. </h5>
          <div className={classes.buttonContainer}>
            <StyledButton className={classes.button} variant="contained" color="inherit" href="/about">
              Learn More
            </StyledButton>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="700"
          src={homepageml}
          alt="Second slide"
          style={{ opacity: 0.5 }}
        />
        <Carousel.Caption>
          <h1 style={{ marginBottom: 20 }}>Machine Learning</h1>
          <h6 style={{ marginBottom: 30 }}>The problem of how disease moves is fundamentally a question of how people move. Leveraging mobility data provided by SafeGraph and XMode, our team is able to create realistic population movements informed by real world data. Our approach to the problem of movement utilizes statistical and machine learning methods from prior literature to form movement patterns that capture the broad range of ways that people move.</h6>
          <div className={classes.buttonContainer}>
            <StyledButton className={classes.button} variant="contained" color="inherit" href="/about">
              Learn More
            </StyledButton>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
};

export default HomeCarousel;
