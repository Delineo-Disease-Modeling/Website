import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
// import FacebookIcon from "@mui/icons-material/Facebook";
import ShareIcon from "@mui/icons-material/Share";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { TwitterButton, EmailButton } from "react-social";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import articles from "../const/devblogposts";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "0 0px",
    marginTop: "0 0px",
    color: "black",
  },

  authorDate: {
    width: "300px",
    marginLeft: "0 0px",
    marginTop: "0 0px",
    padding: "0 0px",
    margin: "0 0px",
    textAlign: "left",
    color: "black",
  },

  card: {
    maxWidth: "100%",
    position: "relative",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#66FCF1",
      textDecoration: "none",
    },
    //color: 'black',
  },

  subtextalign: {
    textAlign: "justify",
    alignItems: "justifyContent",
    color: "black",
  },

  media: {
    height: 240,
  },

  align: {
    textAlign: "justifyContent",
  },

  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },


  cardActionsMobile: {
    display: "flex",
    justifyContent: "space-between",
    
  },

  author: {
    color: "black",
  },

  creditRow: {
    color: "black",
  },

  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));


function DevelopmentBlogCards(props) {
  const classes = useStyles();
  
  function resize() {
    let isDesktop = (window.innerWidth >= 760);
    if (isDesktop) {
        return classes.cardActions;
      }
        return classes.cardActionsMobile;
    
  };
  
  const url = "https://covidweb.isi.jhu.edu";
  const message =
    "Check out this article from the Delineo Disease Modeling Project";

  /* 
    'articles' is an array imported from the const folder, and contains data on the blog posts.
    The DevelopmentBlogCards functional component accepts props that indicate whether this component
    is being rendered on the home page or not. If it is, then we limit the amount of cards rendered
    to the three most recent posts by slicing 'articles' into 'articleArray'. Otherwise 'articleArray'
    is just a copy of 'articles'
  */
  var articleArray = articles

  if (props.HomePage) {
    articleArray = articles.slice(1).slice(-3)
  }


  return (
    <CardContent>
      <Grid container spacing={3} alignItems="center" justify="center">
        {articleArray.map((row) => {
          if (!(row.type === "Article")) return null; 
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea href={row.href}>
                    <CardMedia
                      className={classes.media}
                      image={row.img}
                      title="Development Blog Img"
                    />
                    <CardContent className={classes.align}>
                      <Typography
                        className={classes.title}
                        style={{ fontWeight: "bold", marginTop: "0 0px" }}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {row.title}
                      </Typography>
                      <Typography
                        //style={{}}
                        className={classes.subtextalign}
                        variant="body1"
                        component="p"
                      >
                        {row.subtext}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={resize()} >
                    <Box className={classes.author}>
                      <Box
                        component="span"
                        m={1}
                        className={classes.authorDate}
                      >
                        <Typography className={classes.creditRow} variant="subtitle2" component="p">
                          <span style={{ fontWeight: "bold" }}>
                            {row.author}{" "}
                          </span>
                          - {row.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                          <React.Fragment>
                            <IconButton
                              aria-label="share"
                              {...bindTrigger(popupState)}
                            >
                              <ShareIcon style={{ color: "black" }} />
                            </IconButton>
                            <Menu
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                              }}
                              {...bindMenu(popupState)}
                            >
                              <MenuItem
                                style={{ color: "white" }}
                                onClick={popupState.close}
                              >
                                <TwitterButton message={message}
                                          url={url + row.href}>
                                  <TwitterIcon fontSize="small" />
                                </TwitterButton>
                              </MenuItem>

                              {/* IN ORDER TO HAVE A FACEBOOK SHARE, WE NEED A VALID FB APP ID 
                                  see: https://webkul.com/blog/how-to-generate-facebook-app-id/
                              */}


                              {/* <MenuItem
                                style={{ color: "white" }}
                                onClick={popupState.close}
                              >
                                <FacebookButton message={message}
                                          url={url + row.href} appId={"appId"}>
                                  <FacebookIcon fontSize="small" />
                                </FacebookButton>
                              </MenuItem> */}

                              <MenuItem
                                style={{ color: "white" }}
                                onClick={popupState.close}
                              >
                                <EmailButton message={message}
                                          url={url + row.href}>
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
            );
        })}
      </Grid>
      <Box my={4} className={classes.paginationContainer}></Box>
    </CardContent>
  );
}

export default DevelopmentBlogCards;
