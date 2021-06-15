import React, { Component } from "react";
import { SimulationTimeseries } from "../components";
import "./Simulator.css";
import axios from "axios";
//import Accordion from "@material-ui/core/Accordion";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Unity, { UnityContext } from "react-unity-webgl";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const unityContext = new UnityContext({
  loaderUrl: "./Build/June16.loader.js",
  dataUrl: "./Build/June16.data",
  frameworkUrl: "./Build/June16.framework.js",
  codeUrl: "./Build/June16.wasm",
});

/*
const ColoredAccordion = withStyles({
  root: {
    backgroundColor: "#1b4441c2",
    fontSize: "20px",
    color: "#66FCF1",
  },
})(Accordion);
*/

const styles = (theme) => ({
  bubble: {
    color: "white",

    width: 950,
    position: "relative",
    fontSize: 15,
    textAlign: "left",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: "25px",
    border: "2px solid #2f3538",
    padding: "15px 15px 20px 20px",
    backgroundColor: "#2f3538",
    whiteSpace: "pre-wrap",
    fontFamily: "Montserrat",
  },
  bold: {
    color: "white",
    fontWeight: "bold",

    fontSize: 18,
    textAlign: "left",
    alignSelf: "center",
    alignItems: "center",
    whiteSpace: "pre-wrap",
  },
  boldTitle: {
    color: "white",
    fontWeight: "bold",

    fontSize: 50,
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    whiteSpace: "pre-wrap",
  },
});

class Simulator extends Component {
  // classes = useStyles();

  constructor() {
    super();
    this.state = {
      hidden: false,
      policy: "",
      data: [],
      loading: false,
      jobId: null,
    };
    this._isMounted = false;

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.source = axios.CancelToken.source();
  }

  handleOnClick = () => {
    // if user had an existing job request, delete that
    if (this.state.jobId) {
      axios
        .delete(`./simulations/${this.state.jobId}`, {
          cancelToken: this.source.token,
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("Request canceled:", err.message);
          } else {
            console.log(err);
          }
        });
    }

    // configure post body with specific model params
    let body = {};

    // send post request
    axios
      .post("./simulations", body, { cancelToken: this.source.token })
      .then((res) => {
        // only upon successful post request, update state with in progress state and
        if (res.status === 200) {
          this._isMounted &&
            this.setState({ jobId: `${res.data}`, loading: true });
          console.log("post sent with job id " + res.data);

          axios
            .get(`./simulations/${res.data}`, {
              cancelToken: this.source.token,
            })
            .then((result) => {
              this._isMounted &&
                this.setState({ loading: false, data: [...result.data] });
              console.log("simulation finished running");
            })
            .catch((err) => {
              if (axios.isCancel(err)) {
                console.log("Request canceled:", err.message);
              } else {
                console.log(err);
              }
            });

          // should probably save data to redux store
          // maybe also save jobId? idk yet
        }
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          console.log(err);
        }
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
    this.source.cancel("Operation canceled by the user.");

    // remove existing job request, if it existed
    if (this.state.jobId) {
      axios
        .delete(`./simulations/${this.state.jobId}`)
        .catch((err) => console.log(err));
    }
  }
  //<p style={{ textAlign: 'left', fontSize: '20px', color: '#66FCF1' }}>Model Parameters</p>

  handleClick = () => {
    console.log("button clicked");
    axios
      .post("https://covidmod.isi.jhu.edu/", {
        maskWearing: 0,
        roomCapacity: 0,
        dailyTesting: 0,
        contactTracing: 0,
        stayHome: false,
      })
      .then(
        (response) => {
          console.log("sent sent to server!");
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    console.log("request sent");
  };

  render() {
    const { data, jobId, loading } = this.state;
    const { classes } = this.props;

    // no timeseries: replace with simulation timeseries
    return (
      <div className="GreenBackground">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <div>
              {jobId ? (
                loading ? (
                  <p>loading...</p>
                ) : (
                  <div className="GreenBackground">
                    <h3>Analysis YEE</h3>
                    <SimulationTimeseries infected={data[1]} deaths={data[2]} />
                  </div>
                )
              ) : null}
            </div>
          </Grid>

          <div className="GreenBackground" align="center">
            <Typography variant="h3" className={classes.boldTitle}>
              Welcome to Anytown, USA
            </Typography>
            <div>
              <Unity
                unityContext={unityContext}
                style={{
                  height: "100%",
                  width: 950,
                  border: "2px solid black",
                  background: "grey",
                }}
              />
            </div>
            <br></br>

            <div className={classes.bubble} align="center">
              <Typography className={classes.bold}>About </Typography>
              
              Anytown, USA is a tool to simulate the spread of COVID-19 in a representative town 
              in the United States. The simulation runs for a time period of two months, assuming 
              a town population of 6,000 people. Movement between facilities is modeled off of actual 
              data from Oklahoma City, Oklahoma. More information regarding how movement is simulated 
              can be found on our development blog. Infection within facilities is predicted using 
              the Wells-Riley formula, and more information can also be found on our development blog. 
              Results of the simulation should not be used to inform public health decisions, and is 
              meant only as a tool to show how COVID-19 might spread.
              <br />
              <br />
              <Typography className={classes.bold}>
                How to use the simulator{" "}
              </Typography>
              
              1. Adjust the sliders on the left pane to modify
              non-pharmaceutical interventions (NPI's) including:
              <br />
              <br />
              <ul>
                <li>The percentage of the population that wears masks in stores, restaurants, bars, etc.</li>
                <li>Capacity restrictions on stores and restaurants</li>
                <li>The percentage of the population that is tested for COVID on a daily basis</li>
                <li>The percentage of the population who stay home after coming in contact with an infected person</li>
                <li>The percentage of the population that is fully vaccinated</li>
                <li>Whether stay-at-home orders are in place</li>
              </ul>
              2. Click confirm (once) to lock-in interventions <br />
              3. Press play (this step may take a few minutes as results are
              sent to the simulation server) <br />
              4. Move around the map and click on different buildings to look at
              infection statistics within different facilities <br />
              5. Watch the graph on the main screen to see how the number of 
              infected persons in Anytown grows over time
              <br />
              <br />
              <Typography className={classes.bold}>
                Basic Controls
              </Typography>
              
              Move around the map using WASD or arrow controls
              <br />
              Use the mouse wheel to zoom in/out
              <br />
              Click on buildings to see information on the number of people who
              visited/became infected on both a daily and overall timescale
              <br />
              <br />
              <Typography className={classes.bold}>
                Troubleshooting
              </Typography>
              
              Please make sure webgl is enabled in your browser by visiting{" "}
              <a href="https://get.webgl.org/">https://get.webgl.org/</a>
              <br />
              After hitting play, the simulation may take a while to start
              running. This is normal and happens because there is a lot of data
              that needs to be processed and sent back to your browser.
              <br />
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Simulator);
