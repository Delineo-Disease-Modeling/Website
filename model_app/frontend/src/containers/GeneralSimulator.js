import React, { Component } from "react";
import "./GeneralSimulator.css";
import ConfigurationsPanel from "../components/ConfigurationsPanel";
import {ButtonGroup, Tooltip, Typography} from "@material-ui/core";
import InfectionsChart from "../components/InfectionsChart";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Cell, Legend, Pie, PieChart} from "recharts";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import testdata from "../data/testdata.json";

const data = [
  {
    "name": 'Total Infected',
    "count": 219447},
  {
    "name": 'Total Not infected',
    "count": 379777
  },
];

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
      }
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
        <h1>
        Oklahoma City
        </h1>
        <div>
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
          <Grid container justifyContent="center" alignItems={"center"} alignContent={"center"}>
            <Grid item>
              {/*<ButtonGroup variant="contained" aria-label="outlined primary button group" orientation={"vertical"}>*/}
              {/*  <Button>1. Infectons over time</Button>*/}
              {/*  <Button>2. Buildings breakdown</Button>*/}
              {/*  <Button>3. Buildings by infections</Button>*/}
              {/*</ButtonGroup>*/}
            </Grid>
            <InfectionsChart />
            <PieChart width={730} height={300}>
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
              <Tooltip content={<this.CustomTooltip />} />
              <Legend />
            </PieChart>
            <BarChart width={1000} height={250} data={testdata}>
              <Legend verticalAlign="bottom" height={36}/>
              <Bar dataKey="TotalNotInfected" stackId="a" fill="#8884d8" />
              <Bar dataKey="TotalInfections" stackId="a" fill="#82ca9d" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="BuildingName" />
              <YAxis dataKey="TotalPeople"/>
            </BarChart>
          </Grid>
        <ConfigurationsPanel updateConfigs={this.updateConfigurations} configs={this.state.configurations}/>
      </div >
    );
  }
}

export default GeneralSimulator; 