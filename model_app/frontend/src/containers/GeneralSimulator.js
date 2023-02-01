import React, { Component, useState } from "react";
import axios from "axios";
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
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


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
});

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
      <Typography sytle={{ color: "white" }}>{props.parameter}:</Typography>
      <Typography
        variant="h6"
        style={{ color: "red", fontWeight: 900, textAlign: "center" }}
      >
        {props.value}
      </Typography>
    </div>
  );
}


function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    async click(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())

      const simulationAPI = "https://covidmod.isi.jhu.edu/simulation";

      const body = { "location": { "lat": e.latlng.lat, "long": e.latlng.long } };

      await axios.post(simulationAPI, body)

    },

  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    async click(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())

      const simulationAPI = "https://covidmod.isi.jhu.edu/simulation";

      const body = { "location": { "lat": e.latlng.lat, "long": e.latlng.long } };

      await axios.post(simulationAPI, body)

    },

  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
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
  updateConfigurations = async (configs, useDB) => {
    this.setState({
      configurations: configs,
    });
    try {
      console.log(configs);
      console.log("useDB: " + useDB);
      const res = await axios
        .post("https://covidmod.isi.jhu.edu/simulation/", configs, useDB, {})
        .then((response) => console.log(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  // Update configurations based on API call
  // TODO: Use this functions once API is implemented
  fetchConfigurations = async () => {
    const simulationAPI = "https://covidweb.isi.jhu.edu/api/v1/run_simulation";
    // TODO: Add body params here if finalized API requires so in request
    const body = {};

    await axios.post(simulationAPI, body)
      .then((response) => this.updateConfigurations(response.data))
      .catch((error) => console.log(error));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="content" style={{ backgroundColor: "#1F2325" }}>
        <Typography variant="h3" className={classes.boldTitle}>
          <b>COVID-19 Simulator</b>
        </Typography>
        <h4
          style={{
            color: "white",
          }}
        >
          <b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </b>
          <div
            style={{
              paddingBottom: "20px",
            }}
          ></div>
        </h4>
        {/* CONFIGURATIONS PANEL */}
        <ConfigurationsPanel
          updateConfigs={this.updateConfigurations}
          configs={this.state.configurations}
        />

        {/* Bar Chart */}
        <div
          style={{
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <BarChart
            width={1200}
            height={250}
            data={testdata}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Legend verticalAlign="bottom" height={36} />
            <Bar dataKey="TotalNotInfected" stackId="a" fill="#8884d8" />
            <Bar dataKey="TotalInfections" stackId="a" fill="#82ca9d" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="BuildingName" />
            <YAxis dataKey="TotalPeople" />
          </BarChart>
        </div>
        <PieChart
          width={350}
          height={300}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
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
        <InfectionsChart
          style={{
            marginLeft: "50%",
            marginRight: "50%",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </div>
    );
  }
}

export default withStyles(styles)(GeneralSimulator);
