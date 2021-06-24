import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

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
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  displayUnderTitle: {
    fontSize: 16,
    border: 0,
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  gridListTile: {
    width: '260px'
  },
  large: {
    width: '230px',
    height: '230px',
    marginTop: '20px',
    boxShadow: '0 0 14px 7px black',
  },

}));

export default function TitlebarGridList(tileData) {
  const classes = useStyles();


  return (
    <Container className={classes.root} maxWidth='lg'>

      {tileData.map((tile) => (

        <Grid key={tile.name} >
          <GridListTile component='div' className={classes.gridListTile} key={tile.img}>


            <center>
              <Avatar src={tile.img} className={classes.large} />

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
}
