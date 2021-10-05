import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import DevelopmentBlogCards from './DevelopmentBlogCards'
import blogbackground from '../images/blogbackgroud.PNG'


  const useStyles = makeStyles((theme) => ({

    expand: {
      art: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      ann: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      news: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
    },

    expandOpen: {
      art: { transform: 'rotate(180deg)' },
      ann: { transform: 'rotate(180deg)' },
      news: { transform: 'rotate(180deg)' },
    },
    blogsContainer: {
      paddingTop: theme.spacing(3)
    },
    blogTitle: {
      fontWeight: 800,
      alignItems: "center",
      textAlign: "center",
      color: "black",
      paddingBottom: theme.spacing(3)
    },
  }));



function HomeBlog(props){
    const classes = useStyles();

    return(

        <div style = {{
            backgroundImage: `url(${blogbackground})` , backgroundSize: "cover",}}>
        <Container maxWidth="lg" className={classes.blogsContainer} >
        <Card maxWidth="lg" style={{ background: 'transparent', boxShadow: "none" }} >

          <CardActions style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h4" className={classes.blogTitle}>
            Check Out Our Blog
            </Typography>

          </CardActions>
              <DevelopmentBlogCards HomePage = {true}/>
        </Card>
      </Container>
      </div>
    )
}

export default HomeBlog 