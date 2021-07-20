import React, { useState, useEffect} from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// import FacebookIcon from "@material-ui/icons/Facebook";
import ShareIcon from "@material-ui/icons/Share";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { TwitterButton, EmailButton } from "react-social";
import clsx from "clsx";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import articles from "../const/devblogposts";
import { ArrowBack, ArrowForward } from "@material-ui/icons"
import CarouselSlide from "../components/CarouselSlide"
import Slide from "@material-ui/core/Slide"

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    color: theme.palette.common.white,
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  color: theme.palette.common.white,

  root: {
    backgroundColor: "#383838",
    "&:nth-of-type(odd)": {
      color: theme.palette.common.white,
    },
    "&:hover": {
      backgroundColor: "#505050",
      cursor: "pointer",
    },
    "&:onCellClick": {
      backgroundColor: "grey !important",
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#222629",
  },

  table: {
    fontSize: 14,
    color: theme.palette.common.white,
  },

  hidden: {
    padding: "0 !important",
  },

  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('/blog.jpg')`,
    height: "520px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },

  horiz: {
    display: "inline-block",
  },

  expand: {
    art: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    ann: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    news: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
  },

  expandOpen: {
    art: { transform: "rotate(180deg)" },
    ann: { transform: "rotate(180deg)" },
    news: { transform: "rotate(180deg)" },
  },

  blogsContainer: {
    paddingTop: theme.spacing(3),
  },

  blogTitle: {
    fontWeight: 800,
    alignItems: "center",
    textAlign: "center",
    color: "white",
    paddingBottom: theme.spacing(3),
  },

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
  },

  card: {
    maxWidth: "100%",
    position: "relative",
    backgroundColor: "white", //#010d0d
    "&:hover": {
      backgroundColor: "#66FCF1",
      textDecoration: "none",
    },
  },

  subtextalign: {
    textAlign: "justify",
    alignItems: "justifyContent",
    color: "black",
  },

  creditRow: {
    color: "black",
  },

  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
    maxWidth: "100%",
  },

  root: {
    maxWidth: 345,
    backgroundColor: "#222629",
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

  author: {
    display: "flex",
  },

  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },

  dim: {
    opacity: 0.25
  },

  svg: {
    height: "30px",
    cursor: "pointer",
  },

  carousel: {
    display: "flex",
    minHeight: "70vh",
  },

  fadeOut: {
    opacity: "0",
    transition: "none",
  }
}));

function Arrow(props) {
  const { direction, clickFunction } = props;
  const icon = direction === 'left' ? <ArrowBack /> : <ArrowForward />;

  return <IconButton onClick={clickFunction} style={{ color: "white" }}>{icon}</IconButton>;
}

function DevelopmentBlog(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  //let url = process.env.PUBLIC_URL + "developmentblog/date-2";
  //let url = row.href;
  const url = "https://covidweb.isi.jhu.edu";
  const message =
    "Check out this article from the Delineo Disease Modeling Project";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (id, title) => {
    return (event) => {
      window.location.assign("/developmentblog/Post" + id);
    };
  };

  const [index, setIndex] = useState(0);
  const content = articles[index];
  const numSlides = articles.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    if(direction === 'left'){
      direction = oppDirection
    }
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(direction);
      setSlideIn(true);
    }, 200);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.keyCode === 39) {
            onArrowClick('right');
        }
        if (e.keyCode === 37) {
            onArrowClick('left');
        }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
});

  const addCard = (classes, row, key, current = false) => {
    const currentStyle = current ? null : classes.dim;
    return (
      <div className={currentStyle}>
        <Card key={key} className={classes.card}>
          <CardActionArea href={row.href}>
            <CardMedia
              className={classes.media}
              image={row.img}
              title="Development Blog Img"
            />
            <CardContent className={classes.align}>
              <Typography
                className={classes.title}
                style={{
                  fontWeight: "bold",
                  marginTop: "0 0px",
                }}
                gutterBottom
                variant="h5"
                component="h2"
              >
                {row.title}
              </Typography>
              <Typography
                className={classes.subtextalign}
                variant="body2"
                component="p"
              >
                {row.subtext}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Box
                component="span"
                m={1}
                className={classes.authorDate}
              >
                <Typography
                  className={classes.creditRow}
                  variant="subtitle2"
                  component="p"
                >
                  <span style={{ fontWeight: "bold" }}>
                    {row.author}{" "}
                  </span>
                  - {row.date}
                </Typography>
              </Box>
            </Box>
            <Box>
              <PopupState
                variant="popover"
                popupId="demo-popup-menu"
              >
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
                        <TwitterButton
                          message={message}
                          url={url + row.href}
                        >
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
                                        <FacebookButton
                                          message={message}
                                          url={url + row.href}
                                          appId={"appId"}
                                        >
                                          <FacebookIcon fontSize="small" />
                                        </FacebookButton>
                                      </MenuItem> */}

                      <MenuItem
                        style={{ color: "white" }}
                        onClick={popupState.close}
                      >
                        <EmailButton
                          message={message}
                          url={url + row.href}
                        >
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
      </div>
    )
  }

  return (
    <div className="App" style={{ backgroundColor: "#222629", overflowX: 'hidden'}}>
      <AppBar
        className={classes.appBar}
        style={{ background: "#222629", boxShadow: "none" }}
        position="static"
      ></AppBar>

      <Grid container spacing={3}>
        <Grid item xs>
          <Box className={classes.hero}>
            <Box>
              <Typography variant="h6">Articles & Announcements</Typography>
              <Typography variant="h1">Delineo Blog</Typography>
            </Box>
          </Box>
        </Grid>

        {/* DO NOT DELETE --- MAY BE ADDED BACK IN LATER !!! */}

        {/* <Grid item xs={3}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                      Latest Posts
                    </span>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {articles.map((row) => {
                  if (row.id <= 3) {
                    return (
                      <StyledTableRow key={row}>
                        <StyledTableCell
                          style={{ paddingTop: "20px", paddingBottom: "20px" }}
                          onClick={handleClick(row.id, row.title)}
                          align="left"
                          component="th"
                          scope="row"
                        >
                          <span style={{ fontWeight: "bold", color: "grey" }}>
                            {row.date}{" "}
                          </span>
                          <br />
                          <Typography className={classes.subtitle2}>
                            {row.title}
                          </Typography>
                          <Typography className={classes.subtitle}>
                            {row.subtext}
                          </Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  } else {
                    return null;
                  }
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid> */}
      </Grid>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Card
          maxWidth="lg"
          style={{ background: "#222629", boxShadow: "none" }}
        >
          <CardActions
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" className={classes.blogTitle}>
              Recent Posts
            </Typography>

            <IconButton
              className={clsx(classes.expand.art, {
                [classes.expandOpen.art]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              style={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: "-20px",
                color: "white",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent className={classes.carousel}>
              <Arrow
                className={classes.svg}
                direction='left'
                clickFunction={() => onArrowClick('left')}
              />
              {/* <Slide in={slideIn} direction={slideDirection}> */}
                <div style={{minWidth: "90%"}}>
                  <CarouselSlide 
                  articles={articles} 
                  num={index} addCard={addCard} classes={classes}
                  slideDirection={slideDirection}
                  slideIn={slideIn}></CarouselSlide>
                </div>
              {/* </Slide> */}
              <Arrow
                className={classes.svg}
                direction='right'
                clickFunction={() => onArrowClick('right')}
              />
              <Box my={4} className={classes.paginationContainer}></Box>
            </CardContent>
          </Collapse>
        </Card>
      </Container>
    </div>
  );
}

export default DevelopmentBlog;
