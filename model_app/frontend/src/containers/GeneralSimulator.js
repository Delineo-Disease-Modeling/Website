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
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
  useMap,
  Polygon,
} from "react-leaflet";
import L from "leaflet";
import "leaflet-geosearch/dist/geosearch.css";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

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

// Location marker popup
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  const map = useMapEvents({
    async click(e) {
      map.flyTo(e.latlng, map.getZoom());

      const reverseGeocodeURL =
        "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=" +
        e.latlng.lng +
        "%2C" +
        e.latlng.lat;
      const response = await axios.get(reverseGeocodeURL);

      // Make sure there is no error in response, and that only preset locations can be selected
      if (
        response.data.address != null &&
        response.data.address.CntryName === "United States" &&
        presetLocations.some((e) => e.city === response.data.address.City) &&
        presetLocations.some((e) => e.state === response.data.address.Region)
      ) {
        location = {
          lat: e.latlng.lat,
          long: e.latlng.lng,
          city: response.data.address.City,
          state: response.data.address.Region,
          country: response.data.address.CntryName,
        };

        setPosition(e.latlng);
        setCity(location.city);
        setState(location.state);
      }
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        {city}, {state}
      </Popup>
    </Marker>
  );
}

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
  const [boundaries, setBoundaries] = useState([]);

  useEffect(() => {
    async function getData() {
      // Grab city boundaries for all present locations
      for (let i = 0; i < presetLocations.length; i++) {
        const coordsURL =
          "https://nominatim.openstreetmap.org/search.php?city= " +
          presetLocations[i].city +
          "&state=" +
          presetLocations[i].state +
          "&polygon_geojson=1&format=json";
        const coordsResponse = await axios.get(coordsURL);

        if (coordsResponse.data[0].geojson.type === "Polygon") {
          setBoundaries((boundaries) => [
            ...boundaries,
            L.GeoJSON.coordsToLatLngs(
              coordsResponse.data[0].geojson.coordinates,
              1
            ),
          ]);
        } else if (coordsResponse.data[0].geojson.type === "MultiPolygon") {
          setBoundaries((boundaries) => [
            ...boundaries,
            L.GeoJSON.coordsToLatLngs(
              coordsResponse.data[0].geojson.coordinates,
              2
            ),
          ]);
        }
      }
    }
    getData();
  }, []);

  const boundariesCollection = boundaries.map((coords) => (
    <Polygon key={coords} positions={coords} />
  ));

  return boundariesCollection;
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
      configs.location = location;

      let url = "https://covidmod.isi.jhu.edu/simulation/";
      let testurl = "http://localhost:5000/simulation/";
      console.log(configs);
      await axios.post(url, configs, { timeout: 66000 }).then((res) => {
        this.updateConfigurations(res.data, true);
      });
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
          rowSpacing={1}
          columnSpacing={2}
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
              zoom={15}
              scrollWheelZoom={false}
              style={{ borderRadius: "10px", margin: "10px" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LeafletgeoSearch />
              <LocationMarker />
              <PresetAreas />
            </MapContainer>

            <ConfigurationsPanel
              // TODO: replace line 162 with updateConfigs={this.fetchConfigurations}
              updateConfigs={this.updateConfigurations}
              configs={this.state.configurations}
            />
          </Grid>

          {/* Bottom panel - more chart(s) */}
          <Grid
            container
            justifyContent="center"
            alignItems={"stretch"}
            direction="row"
            xs={11}
            style={{
              backgroundColor: "#1F2325",
              border: "3px solid white",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            {/* Infections Chart */}
            <Grid container xs={6}>
              <InfectionsChart />
            </Grid>
            {/* Pie Chart */}
            <Grid
              container
              justifyContent="center"
              xs={6}
              style={{ padding: "auto" }}
            >
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
