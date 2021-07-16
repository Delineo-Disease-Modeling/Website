import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "./GeneralSimulator.css";
import ConfigurationsPanel from "../components/ConfigurationsPanel";
import { Typography, Grid } from "@material-ui/core";
import okc_city from "../images/OKC_CITY.jpg";
import DailyChart from "../components/Graphs/DailyChart"
import CumulativeChart from "../components/Graphs/CumulativeChart"
import PieChart from "../components/Graphs/PieChart"
import Graph4 from "../components/Graphs/Graph4"
import dummy_data from "../const/dummyGraphData"

const styles = (theme) => ({
  graph: {
    backgroundColor: "rgba(196,196,196,255)",
    margin: '20px',
    borderRadius: '15px',
    padding: '10px',
  }
});

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

class GeneralSimulator extends Component {
  constructor() {
    super();
    this.state = {
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
    }
  }

  //Update configurations once user presses confirm
  updateConfigurations = (configs) => {
    this.setState({
      configurations: configs
    })
  }

  render() {
    const { classes } = this.props;
    return (

      <div className="content">
        <Grid container spacing={3}>
          <Grid item xs={4} >
            <div className={classes.graph}>
              <CumulativeChart data={this.state.data} height={300} width={600} />
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
          </Grid>
          <Grid item xs={4}>
            <div className={classes.graph}>
              <DailyChart data={this.state.data} height={300} width={600} />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.graph}>
              <PieChart data={this.state.data[0].case_distribution} innerRadius={50} outerRadius={150} />
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
                mask wearing percent: {this.state.configurations.maskPercent}
              </Typography>
              <Typography>
                capacity restrictions: {this.state.configurations.capacityPercent}
              </Typography>
              <Typography>
                mass testing: {this.state.configurations.massPercent}
              </Typography>
              <Typography>
                stay at home order: {this.state.configurations.stayAtHome.toString()}
              </Typography>
              <Typography>
                schools: {this.state.configurations.schoolsShutdown.toString()}
              </Typography>

              <Typography>
                restaurants: {this.state.configurations.restaurantsShutdown.toString()}
              </Typography>
              <Typography>
                gyms: {this.state.configurations.gymsShutdown.toString()}
              </Typography>
              <Typography>
                bars: {this.state.configurations.barsShutdown.toString()}
              </Typography>
              <Typography>
                vaccination percent: {this.state.configurations.vaccinePercent}
              </Typography>

            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.graph}>
              <Graph4 data={this.state.data} height={300} width={600}></Graph4>
            </div>
          </Grid>
        </Grid>
        <ConfigurationsPanel updateConfigs={this.updateConfigurations} configs={this.state.configurations} />
      </div >
    );
  }
}

export default withStyles(styles)(GeneralSimulator);