import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles} from "@material-ui/styles";
import HomeCarousel from "../components/Carousel";
import TeamMemberJoin from "../images/teammemberjoin.jpg";
import Box from "@material-ui/core/Box"

//import blogbackground from "../images/blogbackgroud.PNG";
import Link from "@material-ui/core/Link";
//import DevelopmentBlogCards from "./DevelopmentBlogCards.js";
import anytownScreenshot from "../images/anytownScreenshot.png";
import HomeBlog from "./HomeBlog.js";
import DevelopmentBlog from "./DevelopmentBlog.js"
import BlogCarousel from "./BlogCarousel";

const styles = {
  
  bigButton: {
    borderColor: "#66FCF1",
    backgroundColor: "#66FCF1",
    border: "1px solid",
    color: "#444f56",
      "&:hover": {
        backgroundColor: "#222629",
        color: "#66FCF1",
        borderColor: "#66FCF1",
      }
  },

  //fontSize: "20px",

  imageBox: {
    background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
    backgroundSize: "cover",

    color: "white",
    height: "130vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0.9",
    boxShadow: "inset 0 0 0 100vw rgba(0,0,0,0.5)",
  },

  teamPage: {
    background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
    backgroundSize: "cover",
    color: "white",
    height: "130vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0.7",
    boxShadow: "inset 0 0 0 100vw rgba(0,0,0,0.5)",
  },

  blogSection: {
    height: "80vh",
    padding: "20px 200px 60px 200px",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",  
  },

  recent: {
    color: "black",
    fontSize: "40px",
    marginTop: "30px",
    marginBottom: "50px",
  },

  link: {
    "&:hover": {
      color: "white",
    },
  },
};

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div
          className={classes.imageBox}
          style={{ backgroundImage: `url(${anytownScreenshot})` }}
        >
          <div className="header-text">
            <h1 style={{ fontSize: "50px", marginBottom: "30px" }}>
              Interactive Disease Simulation
            </h1>
            <h5 style={{ marginBottom: "30px" }}>
              Bringing a fresh approach to the challenge of modeling disease spread
            </h5>{" "}
            <Button
              className={classes.bigButton}
              variant="contained"
              color="inherit"
              href="/simulator"
            >
              Visit Anytown, USA
            </Button>
          </div>
        </div>

        
        <HomeCarousel /> 
        <h1 style={{marginTop: '3%', marginBottom: '3%', color: 'white'}}>
          Recent Updates from Our Blog
        </h1>
        <Box marginBottom="4%">
        <BlogCarousel />
        </Box>

        

        <div
          className={classes.teamPage}
          style={{ backgroundImage: `url(${TeamMemberJoin})` }}
        >
          <div className="header-text">
            <h1 style={{ fontSize: "50px", marginBottom: "30px" }}>
              We Are Delineo
            </h1>
            <h5 style={{ marginBottom: "30px" }}>
              Bringing a fresh approach to the challenge of modeling disease spread
            </h5>
            <Button
              className={classes.bigButton}
              variant="contained"
              color="inherit"
              href="/team"
            >
              Meet the Team
            </Button>

            <h5 style={{ marginTop: "30px" }}>
              <Link
                className={classes.link}
                color="inherit"
                href="/teamapplication"
              >
                Interested in joining our team?
              </Link>
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
