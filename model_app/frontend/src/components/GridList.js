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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },

  displayUnder: {
    font: "Brush Script MT",
    fontSize: 27,
    border: 0,

    color: 'white',
    height: 10,
    paddingTop: 10,
    paddingBottom: 5,
    textAlign: 'center',


  },

  displayUnderTitle: {
    font: "Brush Script MT",
    fontSize: 16,
    border: 0,
    color: 'white',
    height: 10,
    paddingTop: 20,
    textAlign: 'center',]
    fontStyle: 'italic',
  },


  displayOver: {
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: "100%",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "rgba(0,0,0,.5)",
    padding: "20px 20px 0 20px",
    boxSizing: "border-box",
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: "opacity 350ms ease",
  },
  hoverTitle: {
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
    fontSize: '20px'
  },
  hoverSubtitle: {
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
    fontSize: '16px'
  },
  hoverP: {
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
  },
  gridList: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

  },
  gridListTile: {
    width: '260px',
    height:'350px',

  },
large: {
  width: '230px',
  height:'230px',
  marginTop: '20px',
  boxShadow: '0 0 14px 7px black',
},
bigCir: {
 height:'200px',
 width:'200px',
 borderRadius:'50%',
 borderColor:'#949494',
 borderStyle:'solid',
 borderWidth:'3px',





},

}));

export default function TitlebarGridList(tileData) {
  const classes = useStyles();


  return (
    <Container className={classes.root} maxWidth='lg'>

        {tileData.map((tile) => (

          <Grid key={tile.name}  xs={12} sm={6} md={3}>
            <GridListTile component = 'div'className={classes.gridListTile} key={tile.img}>


             <center><Avatar src={tile.img} className = {classes.large}/></center>
             <center>

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
}
