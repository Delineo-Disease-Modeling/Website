import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { FacebookButton, TwitterButton, EmailButton } from "react-social";
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import articles from '../const/devblogposts';


  const useStyles = makeStyles((theme) => ({

    title: {
      marginBottom: '0 0px',
      marginTop: '0 0px',
      color: "black",

    },
    authorDate: {
      width: "300px",
      marginLeft: '0 0px',
      marginTop: '0 0px',
      padding: '0 0px',
      margin: '0 0px',
      textAlign: 'left'
    },
    card: {
      maxWidth: "100%",
      position: 'relative',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: '#66FCF1',
        textDecoration: 'none'
      }
    },
    subtextalign: {
      textAlign: "justify",
      alignItems: "justifyContent"
    },

    media: {
      height: 240,
    },
    align: {
      textAlign: 'justifyContent'
    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between"
    },
    author: {
      display: "flex"
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center"
    }
  }));




function DevelopmentBlogCards(props){
    const classes = useStyles();

    let url = process.env.PUBLIC_URL + "developmentblog/date-2";
    //developmentblog/date-2

    return (
        <CardContent>
        <Grid container
          spacing={3}
          alignItems="center"
          justify="center">
          {articles.map((row) => {
            if (row.type === 'Article')
              return <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea href={row.href}>
                    <CardMedia
                      className={classes.media}
                      image={row.img}
                      title="Development Blog Img"
                    />
                    <CardContent className={classes.align}>
                      <Typography className={classes.title} style={{ fontWeight: 'bold', marginTop: '0 0px' }} gutterBottom variant="h5" component="h2">
                        {row.title}
                      </Typography>
                      <Typography className={classes.subtextalign} variant="body2" color="white" component="p">
                        {row.subtext}

                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Box component="span" m={1} className={classes.authorDate}>
                        <Typography variant="subtitle2" component="p">
                          <span style={{ fontWeight: 'bold' }}>{row.author} </span>
                           - {row.date}
                        </Typography>

                      </Box>
                    </Box>
                    <Box>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <IconButton aria-label="share" {...bindTrigger(popupState)}>
                              <ShareIcon style={{ color: "black" }} />
                            </IconButton>
                            <Menu anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                              transformOrigin={{ vertical: "top", horizontal: "center" }} {...bindMenu(popupState)}>
                              <MenuItem style={{ color: "white" }} onClick={popupState.close}>
                                <TwitterButton url={url}>
                                  <TwitterIcon fontSize="small" />
                                </TwitterButton></MenuItem>
                              <MenuItem style={{ color: "white" }} onClick={popupState.close}>
                                <FacebookButton url={url} appId={"appId"}>
                                  <FacebookIcon fontSize="small" />
                                </FacebookButton>
                              </MenuItem>

                              <MenuItem style={{ color: "white" }} onClick={popupState.close}>
                                <EmailButton url={url}>
                                  <EmailIcon fontSize="small" />
                                </EmailButton>
                              </MenuItem>
                            </Menu>
                          </React.Fragment>
                        )}
                      </PopupState>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>

          })}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
        </Box>
      </CardContent>
    )
}

export default DevelopmentBlogCards 