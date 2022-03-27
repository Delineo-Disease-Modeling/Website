import React from 'react';
import { Slide } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const HomeCarouselSlide = (props) => {

  const classes = props.classes;

  const index = props.num;
  const current = props.articles[index];
  const prev = index > 0 ? props.articles[index - 1] : props.articles[props.articles.length - 1];
  const next = index < props.articles.length - 1 ? props.articles[index + 1] : props.articles[0];
  const matches = useMediaQuery('(min-width:980px)');

  const getContent = () => {
    return (
      <Slide in={props.slideIn} direction={props.slideDirection}>
        <div key={"thisGrid" + index}>
          {props.addCard(classes, current, "this" + index)}
        </div>
      </Slide>
    )
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      {current.type === "Article" ?
        getContent()
        :
        <div />
      }
    </div >
  );
};

export default HomeCarouselSlide;
