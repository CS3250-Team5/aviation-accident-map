import React, { Component } from "react";
import plane from "../images/ge_crash.png";

const Marker = props => <img src={plane} />;

class Markers extends Component {
  static defaultProps = {
    markers: {
      one: {
        lat: 39.6290176,
        lng: -105.0920324
      },
      two: {
        lat: 39.516111,
        lng: -104.833889
      },
      three: {
        lat: 39.46,
        lng: -105.663333
      },
      four: {
        lat: 39.41,
        lng: -107.21
      },
      five: {
        lat: 40.267223,
        lng: -105.154167
      },
      six: {
        lat: 38.8625,
        lng: -106.156944
      },
      seven: {
        lat: 37.822223,
        lng: -106.906111
      },
      eight: {
        lat: 38.495,
        lng: -102.29
      },
      nine: {
        lat: 39.1175,
        lng: -104.718334
      },
      ten: {
        lat: 40.052222,
        lng: -108.278611
      },
      eleven: {
        lat: 38.830834,
        lng: -104.718334
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <Marker
          lat={this.props.markers.one.lat}
          lng={this.props.markers.one.lng}
        />
        <Marker
          lat={this.props.markers.two.lat}
          lng={this.props.markers.two.lng}
        />
        <Marker
          lat={this.props.markers.three.lat}
          lng={this.props.markers.three.lng}
        />
        <Marker
          lat={this.props.markers.four.lat}
          lng={this.props.markers.four.lng}
        />
        <Marker
          lat={this.props.markers.five.lat}
          lng={this.props.markers.five.lng}
        />
        <Marker
          lat={this.props.markers.six.lat}
          lng={this.props.markers.six.lng}
        />
        <Marker
          lat={this.props.markers.seven.lat}
          lng={this.props.markers.seven.lng}
        />
        <Marker
          lat={this.props.markers.eight.lat}
          lng={this.props.markers.eight.lng}
        />
        <Marker
          lat={this.props.markers.nine.lat}
          lng={this.props.markers.nine.lng}
        />
        <Marker
          lat={this.props.markers.ten.lat}
          lng={this.props.markers.ten.lng}
        />
        <Marker
          lat={this.props.markers.eleven.lat}
          lng={this.props.markers.eleven.lng}
        />
      </React.Fragment>
    );
  }
}

export default Markers;
