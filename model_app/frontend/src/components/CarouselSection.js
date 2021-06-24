import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function CarouselSection(captions, images) {
    return (
        <Paper style={{ padding: '0px', backgroundColor: 'white', border: '2px solid black', width: '90%', margin:'auto' }}>
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
        <div style={{ backgroundColor: 'transparent' }}>
            <img alt="" style={{ width: '100%', height: 'auto' }} src={props.image} />
            <Typography varient='h4' component='h4' style={{ marginTop: '10px', color: '#222629'}}>{props.caption}</Typography>
        </div>
    )
}