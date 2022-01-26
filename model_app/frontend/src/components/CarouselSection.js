import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const CarouselSection = (captions, alts, images) => {
  return (
    <Paper style={{ padding: '1rem', backgroundColor: 'transparent', border: '2px solid black', width: '1000px', maxWidth: '90%', margin: 'auto' }}>
      <Carousel>
        {
          [0, 1].map(element => {
            return (<Item key={element} caption={captions[element]} image={images[element]} alt={alts[element]} />)
          })
        }
      </Carousel>
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
