import React, { Component } from "react";
import plane from "../images/ge_crash.png";

const FatalAccidents = props => <img src={plane} />;

class FatalAccidentss extends Component {
  static defaultProps = {
    accident: {
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
        <FatalAccidents
          lat={this.props.accident.one.lat}
          lng={this.props.accident.one.lng}
        />
        <FatalAccidents
          lat={this.props.accident.two.lat}
          lng={this.props.accident.two.lng}
        />
        <FatalAccidents
          lat={this.props.accident.three.lat}
          lng={this.props.accident.three.lng}
        />
        <FatalAccidents
          lat={this.props.accident.four.lat}
          lng={this.props.accident.four.lng}
        />
        <FatalAccidents
          lat={this.props.accident.five.lat}
          lng={this.props.accident.five.lng}
        />
        <FatalAccidents
          lat={this.props.accident.six.lat}
          lng={this.props.accident.six.lng}
        />
        <FatalAccidents
          lat={this.props.accident.seven.lat}
          lng={this.props.accident.seven.lng}
        />
        <FatalAccidents
          lat={this.props.accident.eight.lat}
          lng={this.props.accident.eight.lng}
        />
        <FatalAccidents
          lat={this.props.accident.nine.lat}
          lng={this.props.accident.nine.lng}
        />
        <FatalAccidents
          lat={this.props.accident.ten.lat}
          lng={this.props.accident.ten.lng}
        />
        <FatalAccidents
          lat={this.props.accident.eleven.lat}
          lng={this.props.accident.eleven.lng}
        />
      </React.Fragment>
    );
  }
}

export default FatalAccidentss;
