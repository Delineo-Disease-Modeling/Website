import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    backgroundColor: "white",
  },
  media: {
    height: 140,
  },
  textbox: {
    height: 200,
  }

});

const BlogCard = ({ imgURL, title, brief }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgURL}
        />
        <CardContent className={classes.textbox}>
          <Typography style={{ fontSize: '20px', marginBottom: '10px' }} variant="body1" color="black" component="p">
            {title}
          </Typography>
          <Typography style={{ fontSize: '15px' }} variant="body1" color="black" component="p">
            {brief}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="black">
          Share
        </Button>
        <Button size="small" color="black">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
