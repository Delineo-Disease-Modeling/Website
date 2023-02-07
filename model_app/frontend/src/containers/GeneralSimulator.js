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
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
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

let location = {
  lat: 35.4676,
  lng: 97.5164,
  actual: "Oklahoma City",
};

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    async click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());

      location = { lat: e.latlng.lat, long: e.latlng.long };
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
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
      configs.useDB = useDB;
      configs.location = location.actual || "Oklahoma City";
      let url = "https://covidmod.isi.jhu.edu/simulation/";
      let testurl = "http://localhost:5000/simulation/";
      const res = await axios.post(url, configs); 
      console.log(res.data);
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

    await axios
      .post(simulationAPI, body)
      .then((response) => this.updateConfigurations(response.data))
      .catch((error) => console.log(error));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="content" style={{ backgroundColor: "#1F2325" }}>
        <Typography variant="h3" className={classes.boldTitle}>
          COVID-19 Simulator
        </Typography>

        {/* Divide screen into left, middle, right */}
        <Grid
          container
          justifyContent="center"
          alignItems={"stretch"}
          direction="row"
          spacing={0}
        >
          {/* Left panel of screen = Summary */}
          <Grid item xs={2} style={{ border: "4px solid white" }}>
            {/* SUMMARY of parameter settings */}
            <Card
              style={{
                textAlign: "left",
                margin: 0,
                width: "100%",
                padding: "5px",
              }}
            >
              <Typography variant="h5" style={{ color: "white" }}>
                Settings:
              </Typography>
              <SummaryTypography
                parameter="mask wearing percent"
                value={this.state.configurations.maskPercent}
              />
              <SummaryTypography
                parameter="capacity restrictions"
                value={this.state.configurations.capacityPercent}
              />
              <SummaryTypography
                parameter="mass testing"
                value={this.state.configurations.massPercent}
              />
              <SummaryTypography
                parameter="stay at home order"
                value={this.state.configurations.stayAtHome.toString()}
              />
              <SummaryTypography
                parameter="schools"
                value={this.state.configurations.schoolsShutdown.toString()}
              />
              <SummaryTypography
                parameter="restaurants"
                value={this.state.configurations.restaurantsShutdown.toString()}
              />
              <SummaryTypography
                parameter="gyms"
                value={this.state.configurations.gymsShutdown.toString()}
              />
              <SummaryTypography
                parameter="bars"
                value={this.state.configurations.barsShutdown.toString()}
              />
              <SummaryTypography
                parameter="vaccination percent"
                value={this.state.configurations.vaccinePercent}
              />
            </Card>
          </Grid>

          {/* Middle of screen - top: panel, bottom: chart */}
          <Grid
            item
            xs={7}
            style={{ border: "4px solid white", padding: "10px" }}
          >
            {/* Very basic map */}
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker />
            </MapContainer>

            <ConfigurationsPanel
              // TODO: replace line 162 with updateConfigs={this.fetchConfigurations}
              updateConfigs={this.updateConfigurations}
              configs={this.state.configurations}
            />

            {/* Infections Chart */}
            <InfectionsChart />
          </Grid>

          {/* Right panel - more chart(s) */}
          <Grid
            item
            xs={3}
            style={{ backgroundColor: "#1F2325", border: "4px solid white" }}
          >
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
          <Grid
            item
            xs={12}
            style={{
              backgroundColor: "#1F2325",
              border: "4px solid white",
              padding: "10px",
            }}
          >
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
      </div>
    );
  }
}

export default withStyles(styles)(GeneralSimulator);
