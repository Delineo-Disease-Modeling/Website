import React from 'react';
import { makeStyles } from '@mui/styles';
import GridListTile from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#222629',
    textAlign: 'center',
  },
  displayUnder: {
    fontSize: 20,
    border: 0,
    color: 'white',
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 'normal'
  },
  displayUnderTitle: {
    fontSize: 15,
    border: 0,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'lighter',
  },
  gridListTile: {
    width: '260px',
    height: '350px',
  },
  large: {
    width: '230px',
    height: '230px',
    marginTop: '20px',
    boxShadow: '0 0 14px 7px black',
  },
}));

const TitlebarGridList = (tileData) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth='lg'>
      {tileData.map((tile) => (
        <Grid key={tile.name}>
          <GridListTile component='div' className={classes.gridListTile} key={tile.img}>
            <center>
              <Avatar src={tile.img} className={classes.large} />
              <div className={classes.displayUnder}>
                <Typography varient='h4' className={classes.displayUnder}>{tile.name}</Typography>
                <Typography className={classes.displayUnderTitle}>{tile.role}</Typography>
              </div>
            </center>
          </GridListTile>
        </Grid>
      ))}
    </Container>
  );
};

export default TitlebarGridList;
