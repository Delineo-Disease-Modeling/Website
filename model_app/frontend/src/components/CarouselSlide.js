import React from 'react';
import {Slide } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

export default function CarouselSlide(props) {

    const classes = props.classes;

    const index = props.num
    const current = props.articles[index];
    const prev = index > 0 ? props.articles[index - 1] : props.articles[props.articles.length - 1]
    const next = index < props.articles.length - 1 ? props.articles[index + 1] : props.articles[0]

    const oppDirection = props.slideDirection === 'left' ? 'right' : 'left';

    const fadeWhenExit = (index) => {
        // document.querySelector(`#prevGrid${index}`).classList.remove('fadeOut');
    }

    return (
        <div>
            {current.type === "Article" ?
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Slide in={props.slideIn} direction={oppDirection}>
                            <Grid key={"prevGrid" + index} item xs={12} sm={6} md={4}>
                                {props.addCard(classes, prev, "prev" + index)}
                            </Grid>
                    </Slide>
                    <Slide in={props.slideIn} direction={props.slideDirection}>
                        {/* <div> */}
                            <Grid key={"thisGrid" + index} item xs={12} sm={6} md={4}>
                                {props.addCard(classes, current, index, "this" + index)}
                            </Grid >
                        {/* </div> */}
                    </Slide>
                    <Slide in={props.slideIn} direction={props.slideDirection}>
                        {/* <div> */}
                            <Grid key={"nextGrid" + index} item xs={12} sm={6} md={4}>
                                {props.addCard(classes, next, "next" + index)}
                            </Grid>
                        {/* </div> */}
                    </Slide>
                </Grid >
                :
                <div />
            }
        </div >
    );
}