import React, { Component } from "react";
import PropTypes from "prop-types";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMap = withGoogleMap(
  (props) =>
    console.log("protettore", props) || (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={4}
        defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
        onClick={props.onMapClick}
      >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
        {props.markers.map(
          (marker) =>
            console.log("i'll scream", marker) || (
              <Marker
                key={marker.key}
                {...marker}
                onRightClick={() => props.onMarkerRightClick(marker)}
              />
            )
        )}
      </GoogleMap>
    )
);

class Map extends Component {
  async componentDidMount() {
    if (this.props.locations.length <= 0) {
      this.props.getLocations();
    }
  }

  render() {
    console.log("proppy", this.props);
    return process.env.npm_lifecycle_event === "test" ? (
      <div />
    ) : (
      <MyMap
        className="test"
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        onMapLoad={() => {}}
        onMapClick={() => {}}
        markers={[{ position: { lat: -34.397, lng: 15.644 }, key: 10 }]}
        onMarkerRightClick={() => {}}
      />
    );
  }
}

Map.propTypes = {
  getLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

export default Map;
