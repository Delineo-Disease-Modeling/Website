import React, { Component } from "react";
import "./GeneralSimulator.css";
import ConfigurationsPanel from "../components/ConfigurationsPanel";
import { Typography, Grid } from "@material-ui/core";
import okc_city from "../images/OKC_CITY.jpg";
import DailyChart from "../components/Graphs/DailyChart"
import CumulativeChart from "../components/Graphs/CumulativeChart"
import PieChart from "../components/Graphs/PieChart"
import Graph4 from "../components/Graphs/Graph4"

var getData = () => {
  var data = [];

  // axios
  //     .get("https://covidmod.isi.jhu.edu", {
  //         params: {
  //             year: '2020'
  //         }
  //     })
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

  //copied dummy data for now
  data = [
    {
      case_distribution: [
        {
          label: 'school',
          value: 23
        },
        {
          label: 'restaurant',
          value: 10
        },
        {
          label: 'gym',
          value: 38
        },
        {
          label: 'bar',
          value: 29
        }
      ],

      initial_cases: 0,

      data: [
        {
          'date': {
            'year': '2020',
            'month': '04',
            'day': '02'
          },
          'newcases': '24'
        },

        {
          'date': {
            'year': '2020',
            'month': '04',
            'day': '03'
          },
          'newcases': '21'
        },

        {
          'date': {
            'year': '2020',
            'month': '04',
            'day': '04'
          },
          'newcases': '19'
        },

        {
          'date': {
            'year': '2020',
            'month': '04',
            'day': '05'
          },
          'newcases': '9'
        },

        {
          'date': {
            'year': '2020',
            'month': '04',
            'day': '06'
          },
          'newcases': '14'
        },

        {
          'date': {
            'year': '2020',
            'month': '04',
            'day': '07'
          },
          'newcases': '24'
        },

        {
          'date': {
            'year': '2020',
            'month': '04',
            'day': '08'
          },
          'newcases': '14'
        },

        {
          'date': {
            'year': '2020',
            'month': '04',
            'day': '09'
          },
          'newcases': '68'
        },

        {
          'date': {
            'year': '2020',
            'month': '04',
            'day': '10'
          },
          'newcases': '28'
        }
      ]
    }

  ]

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
    return (

      <div className="content">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <CumulativeChart data={this.state.data} height={300} width={600}/>
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
                width={375}
                style={{
                  alignSelf: 'center',
                  marginBottom: "1%",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <DailyChart data={this.state.data} height={300} width={600} />
          </Grid>
          <Grid item xs={4}>
            <PieChart data={this.state.data[0].case_distribution} innerRadius={50} outerRadius={150} />
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
            <Graph4 data={this.state.data} height={300} width={600}></Graph4>
          </Grid>
        </Grid>
        <ConfigurationsPanel updateConfigs={this.updateConfigurations} configs={this.state.configurations} />
      </div >
    );
  }
}

export default GeneralSimulator;