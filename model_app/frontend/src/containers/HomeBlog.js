import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import DevelopmentBlogCards from './DevelopmentBlogCards'
import blogbackground from '../images/blogbackgroud.PNG'


  const useStyles = makeStyles((theme) => ({

    blogsContainer: {
      paddingTop: theme.spacing(3)
    },
    blogTitle: {
      marginTop: "10px",
      fontSize: "38px",
      alignItems: "center",
      textAlign: "center",
      color: "white",
      paddingBottom: theme.spacing(3)
    },
  }));
  
  

function HomeBlog(props){
    const classes = useStyles();
  
    return(

        <div style = {{ 
          boxShadow: "inset 0 0 0 100vw rgba(0,0,0,0.5)",
            backgroundImage: `url(${blogbackground})` , backgroundSize: "cover",}}>
        <Container maxWidth="lg" className={classes.blogsContainer} >
        <Card maxWidth="lg" style={{ background: 'transparent', boxShadow: "none" }} >

          <CardActions style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h1" className={classes.blogTitle}>
            Check Out Our Blog
            </Typography>

          </CardActions>
              <DevelopmentBlogCards/>
        </Card>
      </Container>
      </div>
    )
}

export default HomeBlog