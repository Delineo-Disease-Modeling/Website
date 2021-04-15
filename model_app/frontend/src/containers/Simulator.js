import React, { Component } from "react";
import {
  SimulationTimeseries,
} from "../components";
import "./Simulator.css";
import axios from "axios";
import Accordion from "@material-ui/core/Accordion";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Unity, { UnityContext } from "react-unity-webgl";
import Button from "@material-ui/core/Button";

const unityContext = new UnityContext({
  loaderUrl: "./Build/Arpil14(3).loader.js",
  dataUrl: "./Build/Arpil14(3).data",
  frameworkUrl: "./Build/Arpil14(3).framework.js",
  codeUrl: "./Build/Arpil14(3).wasm",
});

const ColoredAccordion = withStyles({
  root: {
    backgroundColor: "#1b4441c2",
    fontSize: "20px",
    color: "#66FCF1",
  },
})(Accordion);


const styles = {
  h3: {
    color: 'white',
    marginRight: 100,
    marginLeft: 100,

    width: 'fit-content',

    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'center',
    alignItems: 'center',
     borderRadius: '25px',
     border: '2px solid #2f3538',
     padding: '20px 20px 20px 20px',
    backgroundColor: '#2f3538'

  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'#222629',
    width: 400,
    position: "relative",
    minHeight: 200,
  },
  fab: {
    position: "fixed",
    right: theme.spacing(4),
    zIndex: 99,
    color: theme.palette.common.black,
    backgroundColor: "cyan",
    "&:hover": {
      backgroundColor: "#0fe0e0",
    },
  },
  drawer: {
    top: 90,
    height: "90%",
  },
  h3: {
    color: 'white',
    marginRight: 100,
    marginLeft: 100,
    marginTop: 40,

    width: 'fit-content',

    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
     borderRadius: '25px',
     border: '2px solid #2f3538',
     padding: '20px 20px 20px 20px',
    backgroundColor: '#2f3538'


  },
}));

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

    this.handleClick = this.handleClick.bind(this)
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
    axios.post('https://covidmod.isi.jhu.edu/', {
      "maskWearing":0,"roomCapacity":0,"dailyTesting":0,"contactTracing":0,"stayHome":false
    })
    .then((response) => {
      console.log("sent sent to server!");
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    console.log("request sent");
  }

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
          <div>
            <Button className='button' variant="contained" color="primary" onClick={(e)=>this.handleClick(e)}>
                  Send dummy JSON
            </Button>
          </div>
          <div className="GreenBackground">
            <h3>Unity Simulation: Anytown USA</h3>
            <div className={classes.h3} align='center'> Members of the fullstack team work throughout the stack. Our web application is built using the MERN stack (MongoDB, Express, ReactJS, NodeJS) and Unity Webgl. Members of this team also manage and access our geolocation data.</div>
            <br></br>
            <Unity
              unityContext={unityContext}
              style={{
                height: "100%",
                width: 950,
                border: "2px solid black",
                background: "grey",
              }}
            />;
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Simulator);
