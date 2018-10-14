import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import plane from "../images/ge_crash.png";

//const AnyReactComponent
const fatalAccidents = ({ text }) => <div><img src={plane}/>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 39.73,
      lng: -104.99
    },
    zoom: 6.5
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        style={{
          height: "50vh",
          width: "60%",
          margin: "0 auto",
          padding: "100px 0 0 0"
        }}
      >
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          <fatalAccidents lat={39.6290176} lng={-105.0920324} />
          <fatalAccidents lat={39.516111} lng={-104.833889} />
          <fatalAccidents lat={39.46} lng={-105.663333} />
          <fatalAccidents lat={39.41} lng={-107.21} />
          <fatalAccidents lat={40.267223} lng={-105.154167} />
          <fatalAccidents lat={38.8625} lng={-106.156944} />
          <fatalAccidents lat={37.822223} lng={-106.906111} />
          <fatalAccidents lat={38.495} lng={-102.29} />
          <fatalAccidents lat={39.1175} lng={-104.718334} />
          <fatalAccidents lat={40.052222} lng={-108.278611} />
          <fatalAccidents lat={38.830834} lng={-104.718334} />

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
