import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default function CarouselSection(captions, images) {
    return (
        <Paper style={{ padding: '30px', borderRadius: '15px', backgroundColor: 'transparent', border: '2px solid black', width: '100%' }}>
            <Carousel>
                {
                    [0, 1, 2, 3].map(element => {
                        return (<Item key={element} caption={captions[element]} image={images[element]} />)
                    })
                }
            </Carousel>
        </Paper>
    )
}

function Item(props) {
    return (
        <div style={{backgroundColor: 'transparent'}}>
            <Typography varient='h2' component='h2' style={{ color: 'white', fontSize: '36px' }}>{props.caption}</Typography>
            <img alt="" style={{ width: 'auto', height: '70vh' }} src={props.image} />
        </div>
    )
}