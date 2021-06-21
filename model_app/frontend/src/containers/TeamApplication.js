import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
//import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import TeamMemberJoin from "../images/teammemberjoin.jpg";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "normal",
    letterSpacing: "1.2px",
    maxWidth: "80%",
    minWidth: "50%",
    //color: "#222629",
    color: "#F8F8FF",
  },

  border: {
    width: "150px",
    margin: "auto",
    borderTop: "3px solid #66FCF1",
    marginBottom: "50px",
  },

  teamContainer: {
    height: "100vh",
    
  },

  text: {
    color: "#F8F8FF",
  },

  link: {
    overflowWrap: "break-word",
  },

}));

const TeamApplication = function TeamApplication() {
  const classes = useStyles();

  return (
    <div
      style={{
        opacity: "0.9",
        background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))",
        boxShadow: "inset 0 0 0 100vw rgba(0,0,0,0.7)",
        backgroundImage: `url(${TeamMemberJoin})`,
        backgroundSize: "cover",
        //color: "white",
      }}
    >
      <Container maxWidth="lg" className={classes.teamContainer}>
        <Box
          style={{
            justifyContent: "center",
            padding: "30px 15%",
            backgroundColor: "rgba(255, 255, 255, 0.0)",
            //boxShadow: "rgba(0,0,0,0.5)",
          }}
        >
          <Box
            py={2}
            bgcolor="rgba(255, 255, 255, 0.0)"
            style={{ color: "#222629", marginTop: "10%"}}
            align="center"
          >
            <Typography variant="h3" component="h3" className={classes.title}>
              JOIN TEAM
            </Typography>
            <div className={classes.border}></div>

            <Typography
              align="center"
              variant="h5"
              component="h5"
              className={classes.text}
            >
              If you are a current student at Johns Hopkins University and are
              interested in joining our team, send us an email at
              <a href="mailto:delineodiseasemodeling@gmail.com?subject=Intrested Student" 
                  className={classes.link}>
                {" "}
                delineodiseasemodeling@gmail.com{" "}
              </a>
              along with your resume and area of interest.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default TeamApplication;
