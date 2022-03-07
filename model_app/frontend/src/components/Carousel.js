import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import articles from "../const/homeSlides";
import { ArrowBack, ArrowForward } from "@material-ui/icons"
import HomeCarouselSlide from "../components/HomeCarouselSlide"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

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

  card: {
    maxWidth: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: "48rem",
    width: "100vw"
  },

  media: {
    maxWidth: "100%",
    minHeight: "50rem",
    width: "100vw",
    opacity: "0.5",
  },

  overlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    "text-align": "center"
  },

  svg: {
    height: "30px",
    cursor: "pointer",
  },

  carousel: {
    width: '100%',
  },
}));

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <ArrowBack /> : <ArrowForward />;

  return <IconButton onClick={clickFunction} style={{ color: "white" }}>{icon}</IconButton>;
}

function HomeCarousel() {

  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const numSlides = articles.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;


    const oppDirection = direction === 'left' ? 'right' : 'left';
    // if(direction === 'left'){
    //   direction = oppDirection
    // }
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 100);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        onArrowClick('right');
      }
      if (e.keyCode === 37) {
        onArrowClick('left');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  
  const addCard = (classes, row, key, current = false) => {
    return (
      <Card key={key} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={row.img}
          title="Home Carousel Img"
        />
        <Typography className={classes.overlay}>
          <h1 style={{ marginBottom: 20 }}>{row.title}</h1>
          <h5 style={{ marginBottom: 30, marginLeft: "5vw", marginRight: "5vw"}}>{row.subtext}</h5>
          <Button className={classes.button} style={{ marginBottom: 30 }} variant="contained" color="inherit" href="/about">
            Learn More
          </Button>
        </Typography>
      </Card>
    )
  }

  return (
    <Box>
      <Box display='flex' flexWrap="nowrap" justifyContent="center" className={classes.carousel}>
        <Arrow
          className={classes.svg}
          direction='left'
          clickFunction={() => onArrowClick('left')}
        />
        <HomeCarouselSlide
          articles={articles}
          num={index} addCard={addCard} classes={classes}
          slideDirection={slideDirection}
          slideIn={slideIn}></HomeCarouselSlide>
        <Arrow
          className={classes.svg}
          direction='right'
          clickFunction={() => onArrowClick('right')}
        />
      </Box>
    </Box>
  )
}

export default HomeCarousel;
