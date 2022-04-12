import React from 'react';
import { makeStyles } from '@mui/styles';
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
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  displayUnderTitle: {
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

const TitlebarGridList = (tileData) => {
  const classes = useStyles();

  return (
    <Container
      maxWidth='lg'
      sx={{ bgcolor: '#222629' }}
    >
      <Grid container columns={4} justifyContent='center'>
        {tileData.map((tile) => (
          <Grid item className={classes.gridListTile} key={tile.img} xs={1} sx={{paddingBottom: '20px'}}>
            <center>
              <Avatar src={tile.img} />
              <div className={classes.displayUnder}>
                <Typography variant='h6' component='h2' className={classes.displayUnder}>{tile.name}</Typography>
                <Typography variant='description' component='h2' className={classes.displayUnderTitle}>{tile.description}</Typography>

              </div>
            </center>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TitlebarGridList;
