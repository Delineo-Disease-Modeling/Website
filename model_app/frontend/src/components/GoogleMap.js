import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import GoogleMapReact from "google-map-react";
import SearchBox from "./SearchBox.js";
import { getPlace } from "../actions/placeActions";
import Marker from "./Marker.js";
import { options } from "../const/placeTypes.js";
import Checkbox from "./Checkbox.js";
import Polygon from "./Polygon.js";

const GoogleMap = ({ center = { lat: 32, lng: -86 }, zoom = 10 }) => {
  const [mapState, setMapState] = useState({
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    checkboxes: options.reduce(
      (options, option) => ({
        ...options,
        [option]: true,
      }),
      {}
    ),
    editPolygon: false,
  });

  // Save Google Maps API in state
  const apiHasLoaded = (map, maps) => {
    setMapState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
  };

  // Save to redux store
  const addPlace = (place) => {
    getPlace(place);
  };

  const handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    setMapState((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  const handleButtonChange = () => {
    setMapState({
      editPolygon: !mapState.editPolygon,
    });
  };

  // Contains SearchBox, Checkboxes, and Google Map with Marker
  const { mapApiLoaded, mapInstance, mapApi, checkboxes } = mapState;

  return (
    <Fragment>
      {mapApiLoaded && (
        <SearchBox map={mapInstance} mapApi={mapApi} addplace={addPlace} />
      )}
      {options.map((option) => (
        <Checkbox
          key={option}
          isSelected={mapState.checkboxes[option]}
          onCheckboxChange={handleCheckboxChange}
          label={option}
        />
      ))}
      <Button onClick={handleButtonChange}>Draw Polygon!</Button>
      {mapApiLoaded && (
        <Polygon
          map={mapInstance}
          mapApi={mapApi}
          editable={mapState.editPolygon}
        />
      )}
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_MAP_API,
            libraries: ["places", "drawing"],
          }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
        >
          {mapApiLoaded && (
            <Marker map={mapInstance} mapApi={mapApi} filter={checkboxes} />
          )}
        </GoogleMapReact>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  place: state.place,
});

export default connect(mapStateToProps, { getPlace })(GoogleMap);
