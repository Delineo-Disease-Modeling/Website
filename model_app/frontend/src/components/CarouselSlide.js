import React from 'react';
import { Slide } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function CarouselSlide(props) {

    const classes = props.classes;

    const index = props.num
    const current = props.articles[index];
    const prev = index > 0 ? props.articles[index - 1] : props.articles[props.articles.length - 1]
    const next = index < props.articles.length - 1 ? props.articles[index + 1] : props.articles[0]
    const matches = useMediaQuery('(min-width:800px)');

    const getContent = () => {
        return (
            !matches ?
                <Slide in={props.slideIn} direction={props.slideDirection}>
                    <div key={"thisGrid" + index}>
                        {props.addCard(classes, current, index, "this" + index)}
                    </div >
                </Slide>
                :
                <Grid container spacing={1} alignItems='stretch'>
                    <Grid item xs={12} sm={4} style={{ overflow: 'hidden'}}>
                        <Slide in={props.slideIn} direction={props.slideDirection}>
                            <div key={"thisGrid" + index}>
                                {props.addCard(classes, prev, "prev" + index)}
                            </div>
                        </Slide>
                    </Grid>

                    <Grid item xs={12} sm={4} style={{ overflow: 'hidden' }}>
                        <Slide in={props.slideIn} direction={props.slideDirection}>
                            <div key={"thisGrid" + index}>
                                {props.addCard(classes, current, index, "this" + index)}
                            </div >
                        </Slide>
                    </Grid>
                    <Grid item xs={12} sm={4} style={{ overflow: 'hidden'}}>
                        <Slide in={props.slideIn} direction={props.slideDirection}>
                            <div key={"thisGrid" + index}>
                                {props.addCard(classes, next, "next" + index)}
                            </div>
                        </Slide>
                    </Grid>
                </Grid>
        )
    }
    return (
        <div style={{ overflow: 'hidden' }}>
            {current.type === "Article" ?
                getContent()
                :
                <div />
            }
        </div >
    );
}