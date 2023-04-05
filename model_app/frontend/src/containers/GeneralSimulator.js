import React, { Component, useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./GeneralSimulator.css";
import { withStyles } from "@material-ui/styles";
import ConfigurationsPanel from "../components/ConfigurationsPanel";
import { Typography, Card } from "@material-ui/core";
import ToolTip from "../components/ToolTip";
import InfectionsChart from "../components/InfectionsChart";
import Grid from "@material-ui/core/Grid";
import { Cell, Legend, Line, Pie, PieChart } from "recharts";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import testdata from "../data/testdata.json";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  useMap,
  Tooltip as MarkerTooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import {Buffer} from "buffer";
const zlib = require("react-zlib-js");




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
  dialogTitle: {
    //textAlign: "center",
  },

  dialogText: {
    color: "white",
    //textAlign: "center",
  },

  dialogButton: {
    color: "#66FCF1",
    border: "2px solid #66FCF1",
    alignSelf: "center",
    "&:hover": {
      color: "black",
      backgroundColor: "#66FCF1",
    },
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

// Starting point for map: JHU
const jhuCoords = [39.328888, -76.620277];

// UPDATE THIS TO ADD MORE LOCATIONS - ALSO, CHECK ON https://nominatim.openstreetmap.org/ui/search.html IF THE API CONTAINS THE CITY BOUNDARIES
const presetLocations = [
  {
    city: "Baltimore",
    state: "Maryland",
  },
  {
    city: "Washington",
    state: "District of Columbia",
  },
  {
    city: "Barnsdall",
    state: "Oklahoma",
  },
];

// Typography for Parameter Summary
function SummaryTypography(props) {
  return (
    <div>
      <Typography sytle={{ color: "white" }}>{props.parameter}:</Typography>
      <Typography
        variant="h6"
        style={{
          color: "#66FCF1",
          fontWeight: 900,
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        {props.value}
      </Typography>
    </div>
  );
}

let location = {
  lat: 35.4676,
  lng: 97.5164,
  city: "Oklahoma City",
  state: "Oklahoma",
  country: "United States",
};

// Location search feature
function LeafletgeoSearch() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider,
      showMarker: false,
    });

    map.addControl(searchControl);

    return () => map.removeControl(searchControl);
  }, []);

  return null;
}

function PresetAreas() {
  const [markers, setMarkers] = useState([]);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    async function getData() {
      // Grab city boundaries for all present locations
      for (let i = 0; i < presetLocations.length; i++) {
        const coordsURL =
          "https://nominatim.openstreetmap.org/search.php?city= " +
          presetLocations[i].city +
          "&state=" +
          presetLocations[i].state +
          "&format=json";
        const coordsResponse = await axios.get(coordsURL);

        setMarkers((markers) => [
          ...markers,
          [coordsResponse.data[0].lat,coordsResponse.data[0].lon]
           
  
        ]);

      }
    }
    getData();
  }, []);

  const markersCollection = markers.map((coords, index) => (
    <Marker key = {coords} position={coords} eventHandlers={{
      click: () => {
        setCity(presetLocations[index].city);
        setState(presetLocations[index].state);
        location = {
          lat: coords[0],
          long: coords[1],
          city: presetLocations[index].city,
          state: presetLocations[index].state,
          country: "United States",
        };
      },
    }}>
       {/* Only display the permanent tooltip if the Marker is the selected location */}
      { city === presetLocations[index].city && state === presetLocations[index].state && <MarkerTooltip permanent> Location set to {city}, {state}! </MarkerTooltip>}
       {( city != presetLocations[index].city || state != presetLocations[index].state) && <MarkerTooltip> {presetLocations[index].city}, {presetLocations[index].state} </MarkerTooltip>}

      </Marker>
  ));

  return markersCollection;
}

class GeneralSimulator extends Component {
  COLORS = ["#82ca9d", "#8884d8", "#FFBB28", "#FF8042", "#AF19FF"];
  constructor(props) {
    super(props);
    this.state = {
      showReqPopup: false,
      showErrorPopup: false,
      showSuccessPopup: false,
    };
  }

  handleReq = () => {
    return (
      <Dialog open={this.state.showReqPopup}>
        <DialogTitle className={styles.dialogTitle}>
          Generating Simulation
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={styles.dialogText}>
            Please wait while we generate a simulation for you. This may take a
            few minutes.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  };
  handleError = () => {
    return (
      <Dialog open={this.state.showErrorPopup}>
        <DialogTitle className={styles.dialogTitle}>
          Error Generating Simulation
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={styles.dialogText}>
            There was an error generating your simulation. Please try again. If
            the problem persists, please contact us at
            delineodiseasemodeling@gmail.com
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              this.setState({ showErrorPopup: false });
            }}
            //autoFocus
            className={styles.dialogButton}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  handleSuccess = () => {
    return (
      <Dialog open={this.state.showSuccessPopup}>
        <DialogTitle className={styles.dialogTitle}>
          Pre-Generated Simulation
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={styles.dialogText}>
            Your simulation has been generated. Please click the "View Results"
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              this.setState({ showSuccessPopup: false });
            }}
            //autoFocus
            className={styles.dialogButton}
          >
            View Results
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  updateConfigs = async (configs, useDB) => {
    try {
      configs.useDB = useDB;
      configs.location = location;

      let url = "https://covidmod.isi.jhu.edu/simulation/";
      let testurl = "http://localhost:5000/simulation/";
      
     
      this.setState({ showReqPopup: true });
      await axios.post(url, configs, {timeout: 130000}).then((res) => {

        

        let decodedResult = zlib.inflateSync(Buffer.from(res.data["base64(zip(o))"], 'base64')).toString()
       

        console.log(decodedResult);


        // TODO: use decodedResult to update stuff
        //this.updateConfigurations(res.data, true);


        this.setState({ showReqPopup: false });
        this.setState({ showSuccessPopup: true });
      });
    } catch (error) {
      console.log(error);
      console.log("Error in updating configurations");
      this.setState({ showReqPopup: false });
      this.setState({ showErrorPopup: true });
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
        {this.state.showErrorPopup ? this.handleError() : null}
        {this.state.showReqPopup ? this.handleReq() : null}
        {this.state.showSuccessPopup ? this.handleSuccess() : null}

        {/* Divide screen into left, middle, right */}
        <Grid
          container
          justifyContent="center"
          alignItems={"stretch"}
          direction="row"
        >
          {/* Top of screen */}
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.boldTitle}>
              What is Delineo?
            </Typography>
            <Typography variant="body1">
              Delineo is a COVID-19 simulator that allows users to simulate the
              spread of COVID-19 in a given location. Users can select
              configurations to simulate the spread of COVID-19 in a given
              location. The simulator will then run a simulation and display the
              results.
            </Typography>
            <Typography variant="h5" className={classes.boldTitle}>
              Instructions
            </Typography>
            <Typography variant="body1">
              1. Select a location on the map or search for a location in the
              search bar.
              <br />
              Note: Valid locations are cities in the United States and are
              highlighted in blue.
              <br />
              2. Select the configurations you would like to simulate.
              <br />
              3. Press the "Confirm" button to run the simulation.
              <br />
              4. Simulation results will be displayed in the charts below after
              a successful simulation.
            </Typography>
          </Grid>
          {/* Middle of screen - top: panel, bottom: chart */}
          <Grid item xs={9} style={{ paddingBottom: "10px" }}>
            {/* Very basic map */}
            <MapContainer
              center={jhuCoords}
              zoom={8}
              scrollWheelZoom={false}
              style={{ borderRadius: "10px", margin: "10px" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LeafletgeoSearch />
              <PresetAreas />
            </MapContainer>

            <ConfigurationsPanel updateConfigs={this.updateConfigs} />
          </Grid>

          {/* Bottom panel - more chart(s) */}
          <Grid
            container
            justifyContent="center"
            alignItems={"stretch"}
            direction="row"
            style={{
              backgroundColor: "#1F2325",
              border: "3px solid white",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            {/* Infections Chart */}
            <Grid container>
              <InfectionsChart />
            </Grid>
            {/* Pie Chart */}
            <Grid container justifyContent="center" style={{ padding: "auto" }}>
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
            {/* Bar Chart */}
            <BarChart width={1200} height={250} data={testdata}>
              <Legend verticalAlign="bottom" height={36} />
              <Bar dataKey="TotalNotInfected" stackId="a" fill="#8884d8" />
              <Bar dataKey="TotalInfections" stackId="a" fill="#82ca9d" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="BuildingName" tick={{ fill: "#66FCF1" }} />
              <YAxis dataKey="TotalPeople" tick={{ fill: "#66FCF1" }} />
            </BarChart>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(GeneralSimulator);
