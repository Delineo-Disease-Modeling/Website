import React, { Component } from "react";
import "./GeneralSimulator.css";
import { withStyles } from "@material-ui/styles";
import ConfigurationsPanel from "../components/ConfigurationsPanel";
import { Typography, Card } from "@material-ui/core";
import ToolTip from "../components/ToolTip";
import InfectionsChart from "../components/InfectionsChart";
import Grid from "@material-ui/core/Grid";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import testdata from "../data/testdata.json";

const styles = (theme) => ({
  boldTitle: {
    color: "white",
    fontWeight: "bold",

    fontSize: 50,
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    whiteSpace: "pre-wrap",
  },
})

const data = [
  {
    name: "Total Infected",
    count: 219447,
  },
  {
    name: "Total Not infected",
    count: 379777,
  },
];

// Typography for Parameter Summary 
function SummaryTypography(props) {

  return (
    <div>
      <Typography sytle={{ color: 'white' }}>
        {props.parameter}:
      </Typography>
      <Typography variant='h6' style={{ color: 'red', fontWeight: 900, textAlign: 'center' }}>
        {props.value}
      </Typography>
    </div>
  )
}

class GeneralSimulator extends Component {
  COLORS = ["#82ca9d", "#8884d8", "#FFBB28", "#FF8042", "#AF19FF"];

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
    };
  }

  //Update configurations once user presses confirm
  updateConfigurations = (configs) => {
    this.setState({
      configurations: configs,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="content" style={{ backgroundColor: "#1F2325" }}>
        <Typography variant="h3" className={classes.boldTitle}>Oklahoma City</Typography>

        {/* Divide screen into left, middle, right */}
        <Grid
          container
          justifyContent="center"
          alignItems={"stretch"}
          direction="row"
          spacing={0}
        >
          {/* Left panel of screen = Summary */}
          <Grid item xs={2} style={{ border: '4px solid white' }}>

            {/* SUMMARY of parameter settings */}
            <Card style={{ textAlign: "left", margin: 0, width: "100%", padding: "5px" }}>
              <Typography variant="h5" style={{ color: 'white' }}>
                Settings:
              </Typography>
              <SummaryTypography
                parameter='mask wearing percent'
                value={this.state.configurations.maskPercent}
              />
              <SummaryTypography
                parameter='capacity restrictions'
                value={this.state.configurations.capacityPercent}
              />
              <SummaryTypography
                parameter='mass testing'
                value={this.state.configurations.massPercent}
              />
              <SummaryTypography
                parameter='stay at home order'
                value={this.state.configurations.stayAtHome.toString()}
              />
              <SummaryTypography
                parameter='schools'
                value={this.state.configurations.schoolsShutdown.toString()}
              />
              <SummaryTypography
                parameter='restaurants'
                value={this.state.configurations.restaurantsShutdown.toString()}
              />
              <SummaryTypography
                parameter='gyms'
                value={this.state.configurations.gymsShutdown.toString()}
              />
              <SummaryTypography
                parameter='bars'
                value={this.state.configurations.barsShutdown.toString()}
              />
              <SummaryTypography
                parameter='vaccination percent'
                value={this.state.configurations.vaccinePercent}
              />
            </Card>
          </Grid>

          {/* Middle of screen - top: panel, bottom: chart */}
          <Grid item xs={7} style={{ border: '4px solid white', padding: '10px' }}>
            {/* CONFIGURATIONS PANEL */}
            <ConfigurationsPanel
              updateConfigs={this.updateConfigurations}
              configs={this.state.configurations}
            />

            {/* Infections Chart */}
            <InfectionsChart />
          </Grid>

          {/* Right panel - more chart(s) */}
          <Grid item xs={3} style={{ backgroundColor: "#1F2325", border: '4px solid white' }} >

            {/* PIE CHART */}
            <PieChart width={350} height={300}>
              <Pie
                data={data}
                color="#000000"
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={this.COLORS[index % this.COLORS.length]}
                  />
                ))}
              </Pie>
              <ToolTip description={"Percentage of infected individuals"} />
              <Legend />
            </PieChart>
          </Grid>

          {/* Bottom panel - more chart(s) */}
          <Grid item xs={12} style={{ backgroundColor: "#1F2325", border: '4px solid white', padding: '10px' }}>

            {/* Bar Chart */}
            <BarChart width={1200} height={250} data={testdata}>
              <Legend verticalAlign="bottom" height={36} />
              <Bar dataKey="TotalNotInfected" stackId="a" fill="#8884d8" />
              <Bar dataKey="TotalInfections" stackId="a" fill="#82ca9d" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="BuildingName" />
              <YAxis dataKey="TotalPeople" />
            </BarChart>
          </Grid>
        </Grid>
      </div >

    );
  }
}

export default withStyles(styles)(GeneralSimulator);
