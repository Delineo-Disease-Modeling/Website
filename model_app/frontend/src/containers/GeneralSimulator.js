import React, { Component } from "react";
import "./GeneralSimulator.css";
import ConfigurationsPanel from "../components/ConfigurationsPanel";

class GeneralSimulator extends Component {
  constructor() {
    super();
    
  }

  render() {
    return(
      <div className="content">
        <div>
          
        </div>
        <ConfigurationsPanel />
      </div>
    );
  }
}

export default GeneralSimulator;