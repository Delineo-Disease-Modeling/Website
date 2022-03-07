import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
// import FacebookIcon from "@mui/icons-material/Facebook";
import clsx from "clsx";
import BlogCarousel from "./BlogCarousel"

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#222629",
  },

  table: {
    fontSize: 14,
    color: theme.palette.common.white,
  },

  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.5)), url('/blog.jpg')`,
    height: "300px",
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
}));

function DevelopmentBlog(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // */ const handleClick = (id, title) => {
  //   return (event) => {
  //     window.location.assign("/developmentblog/Post" + id);
  //   };
  // */ */ };

  return (
    <div className="App" style={{ backgroundColor: "#222629", overflowX: 'hidden' }}>
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
        {/*
          <Grid item xs={3}>
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
            <Typography variant='h4' className={classes.blogTitle}>
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
            <BlogCarousel />
          </Collapse>
        </Card>
      </Container>
    </div >
  );
}

export default DevelopmentBlog;
