import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 39.73,
      lng: -104.99
    },
    zoom: 10
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
          <AnyReactComponent lat={39.73} lng={-104.99} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
