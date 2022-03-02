import React from 'react';
import CarouselSlide from "../components/CarouselSlide"
// import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const CarouselSection = (captions, alts, images) => {
  return (
    <Paper style={{ padding: '1rem', backgroundColor: 'transparent', border: '2px solid black', width: '1000px', maxWidth: '90%', margin: 'auto' }}>
      <CarouselSlide>
      {/* <Carousel> */}

        {
          [0, 1].map(element => {
            return (<Item key={element} caption={captions[element]} image={images[element]} alt={alts[element]} />)
          })
        }
      </CarouselSlide>
      {/* </Carousel> */}
    </Paper>
  )
};

const Item = (props) => {
  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <img alt={props.alt} style={{ width: '100%' }} src={props.image} />
      <Typography varient='h4' component='h4' style={{ marginTop: '10px', color: 'white', fontSize: '1.25rem' }}>{props.caption}</Typography>
    </div>
  )
};

export default CarouselSection;
