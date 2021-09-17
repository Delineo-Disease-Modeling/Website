import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ConfigurationsPanel from "../components/ConfigurationsPanel";
import { Typography, Grid } from "@material-ui/core";
import GoogleMapReact from 'google-map-react';
//import okc_city from "../images/OKC_CITY.jpg";
import DailyChart from "../components/Graphs/DailyChart"
import CumulativeChart from "../components/Graphs/CumulativeChart"
import PieChart from "../components/Graphs/PieChart"
import Graph4 from "../components/Graphs/Graph4"
import dummy_data from "../const/dummyGraphData"
import okc_city from "../images/okc_skyline.png";

const styles = (theme) => ({
  graph: {
    backgroundColor: "	#C8C8C8",
    margin: '20px',
    borderRadius: '15px',
    padding: '10px',
  },
  content: {
    backgroundColor: "rgba(49,53,56,255)",
    overflow: 'auto',
  },
});

const useStyles = makeStyles((theme) => ({
  graph: {
    backgroundColor: "rgba(196,196,196,255)",
    margin: '20px',
    borderRadius: '15px',
    padding: '10px',
  },
  content: {
    backgroundColor: "rgba(49,53,56,255)",
    overflow: 'auto',
  },
}));

var getData = () => {
  var data = [];

  // Uncomment get request later when deploying simulation page
  // Hard-coded simulation data used for now 
  //  axios
  //     .get("https://covidmod.isi.jhu.edu")
  //     .then((res) => {
  //         data = res.data;
  //         console.log("data retrieved");
  //     })
  //     .catch((err) => {
  //         if (axios.isCancel(err)) {
  //             console.log("Request canceled:", err.message);
  //         } else {
  //             console.log(err);
  //         }
  //     });
  // return data;

  data = dummy_data;
  getTotalCases(data[0])

  return data;
}

function getTotalCases(data) {
  var totalCount = data.initial_cases
  Object.keys(data.case_distribution).forEach(function (key, i) {
    console.log(data.case_distribution[key])
  })
  return data['data'].map((entry, i) => {
    totalCount += parseInt(entry['newcases'])
    entry['totalcases'] = totalCount
    entry['newcases'] = parseInt(entry['newcases'])
    return 0;
  })
}

function GeneralSimulator(props) {
  const [state, setState] = React.useState({
    configurations: {
      maskPercent: 30,
      capacityPercent: 30,
      massPercent: 30,
      stayAtHome: false,
      schoolsShutdown: false,
      restaurantsShutdown: false,
      gymsShutdown: false,
      barsShutdown: false,
      vaccinePercent: 30,
    },
    data: getData()
  });

  //Update configurations once user presses confirm
  const updateConfigurations = (configs) => {
    setState({ ...state, configurations: configs });
  }

  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Grid container spacing={3}>
        <Grid item xs={4} >
          <div className={classes.graph}>
            <CumulativeChart data={state.data} height={300} width={600} />
          </div>
        </Grid>
        <Grid item xs={4}>
          <h1
            style={{
              color: "white",
              marginTop: "2%",
              marginBottom: "1%"
            }}>
            Oklahoma City
          </h1>
          <div>
            <img
              img src={okc_city} alt="okc"
              height={100}
              width={"100%"}
              style={{
                alignSelf: 'center',
                marginBottom: "1%",
              }}
            />
          </div>
          <div style={{ width: '100%', height: '260px' }}>
            <GoogleMapReact
              defaultCenter={{
                lat: 35.481918,
                lng: -97.508469,
              }}
              defaultZoom={10}
            >
            </GoogleMapReact>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.graph}>
            <DailyChart data={state.data} height={300} width={600} />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.graph}>
            <PieChart data={state.data[0].case_distribution} innerRadius={50} outerRadius={150} />
          </div>
        </Grid>
        <Grid item xs={4}>



          <div>
            {/*PLEASE READ:
          ======================================================================================
          All the stuff below in this div are not needed, someone on Haley/Ryan's scrum team
          was kind enough to leave this here to show how to access the various state variables.
          Please remove and replace with the Population and POI info (see figma) when ready.
           */}
            <Typography>
              Mask wearing percentage: {state.configurations.maskPercent}
            </Typography>
            <Typography>
              Capacity restrictions: {state.configurations.capacityPercent}
            </Typography>
            <Typography>
              Mass testing: {state.configurations.massPercent}
            </Typography>
            <Typography>
              Stay at home order: {state.configurations.stayAtHome.toString()}
            </Typography>
            <Typography>
              Schools: {state.configurations.schoolsShutdown.toString()}
            </Typography>
            <Typography>
              Restaurants: {state.configurations.restaurantsShutdown.toString()}
            </Typography>
            <Typography>
              Gyms: {state.configurations.gymsShutdown.toString()}
            </Typography>
            <Typography>
              Bars: {state.configurations.barsShutdown.toString()}
            </Typography>
            <Typography>
              Vaccination percentage: {state.configurations.vaccinePercent}
            </Typography>

          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.graph}>
            <Graph4 data={state.data} height={300} width={600}></Graph4>
          </div>
        </Grid>
      </Grid>
      <ConfigurationsPanel updateConfigs={updateConfigurations} configs={state.configurations} />
    </div >
  )
}

export default withStyles(styles)(GeneralSimulator);