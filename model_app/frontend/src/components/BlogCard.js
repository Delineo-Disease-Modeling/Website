import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    backgroundColor: "white",
  },
  media: {
    height: 140,
  },
  textbox:{
    height: 200,
  }

});

export default function BlogCard({
    imgURL,
    title,
    brief,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgURL}
        />
        <CardContent className={classes.textbox}>
        <Typography style={{ fontSize: '20px', marginBottom: '10px'}} variant="body2" color="black" component="p">
            {title}
          </Typography>
          <Typography style={{ fontSize: '15px'}} variant="body2" color="black" component="p">
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
}