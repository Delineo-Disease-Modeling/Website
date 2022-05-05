import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import DevelopmentBlogCards from './DevelopmentBlogCards'


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
      color: "white",
      paddingBottom: theme.spacing(3)
    },
  }));



function DevelopmentBlogContainer(props){
    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    return(
        <Container maxWidth="lg" className={classes.blogsContainer} >
        <Card maxWidth="lg" style={{ background: '#222629', boxShadow: "none" }} >

          <CardActions style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Typography variant="h4" className={classes.blogTitle}>
              Articles
            </Typography>

            <IconButton
              className={clsx(classes.expand.art, {
                [classes.expandOpen.art]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: "-20px", color: 'white' }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
              <DevelopmentBlogCards/>
          </Collapse>
        </Card>
      </Container>
    )
}

export default DevelopmentBlogContainer