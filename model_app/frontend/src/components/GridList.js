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
}));

const colSpacing = (role) => {
  return role === 'Project Manager' ? 12 : 'auto'
}


const TitlebarGridList = (tileData) => {
  const classes = useStyles();

  return (
    <Container
      maxWidth='lg'
      sx={{ bgcolor: '#222629' }}
    >
      <Grid container justifyContent='center' rowSpacing={0} >
        {tileData.map((tile) => (
          <Grid xs={colSpacing(tile.role)} item key={tile.img} className={classes.gridListTile}>
            <center>
              <Avatar src={tile.img} />
              <div className={classes.displayUnder}>
                <Typography variant='h6' component='h2' className={classes.displayUnder} >{tile.name}</Typography>
                <Typography variant='description' component='h2' className={classes.displayUnderTitle}>{tile.role}</Typography>
              </div>
            </center>
          </Grid>
        ))}
      </Grid>
      <div style={{ height: '20px' }} />
    </Container>
  );
};

export default TitlebarGridList;
