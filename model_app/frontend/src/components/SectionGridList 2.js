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
    fontSize: 25,
    border: 0,
    color: 'white',
    height: 10,
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  displayUnderTitle: {
    fontSize: 16,
    border: 0,
    color: 'white',
    height: 10,
    paddingTop: 30,
    textAlign: 'center',
    fontStyle: 'italic',
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
        <Grid key={tile.name} xs={12} sm={6} md={3}>
          <GridListTile component='div' className={classes.gridListTile} key={tile.img}>
            <center><Avatar src={tile.img} className={classes.large} /></center>
            <center>
              <div className={classes.displayUnder}>
                <Typography className={classes.displayUnder}>{tile.name}</Typography>
                <Typography className={classes.displayUnderTitle}>{tile.description}</Typography>
              </div>
            </center>
          </GridListTile>
        </Grid>
      ))}
    </Container>
  );
};

export default TitlebarGridList;
