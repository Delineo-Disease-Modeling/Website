import React, { Component } from "react";
import "./GeneralSimulator.css";
import ConfigurationsPanel from "../components/ConfigurationsPanel";
import { Typography } from "@material-ui/core";

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
        <ConfigurationsPanel updateConfigs={this.updateConfigurations} configs={this.state.configurations}/>
      </div >
    );
  }
}

export default GeneralSimulator;