import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function CarouselSection(captions, images) {
    return (
        <Paper style={{ padding: '0px', backgroundColor: '#222629', border: '2px solid black', width: '90%', margin:'auto' }}>
            {/* <Typography varient='h2' component='h2' style={{color: 'black', fontSize:'30px'}}>Unity Anytown</Typography> */}
            <Carousel>
                {
                    [0, 1].map(element => {
                        return (<Item key={element} caption={captions[element]} image={images[element]} />)
                    })
                }
            </Carousel>
        </Paper>
    )
}

function Item(props) {
    return (
<<<<<<< HEAD
        <div style={{backgroundColor: 'transparent'}}>
            <Typography varient='h2' component='h2' style={{ color: 'white', fontSize: '36px' }}>{props.caption}</Typography>
            <img alt="" style={{ width: 'auto', height: '70vh' }} src={props.image} />
=======
        <div style={{ backgroundColor: 'transparent' }}>
            <img alt="" style={{ width: '100%', height: 'auto' }} src={props.image} />
            <Typography varient='h4' component='h4' style={{ marginTop: '10px', color: 'white'}}>{props.caption}</Typography>
>>>>>>> 69c3fab5b4f20198d390c611b3601642ef711fa5
        </div>
    )
}