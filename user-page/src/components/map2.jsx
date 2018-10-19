import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../style/map.css";

import plane from "../images/ge_crash.png";
import awos from "../images/ge_Mt_AWOS.png";
import mountain from "../images/ge_Mt_pass0.png";

const FatalAccidents = ({ text }) => (
  <div>
    <img src={plane} alt="plane" />
    {text}
  </div>
);

class Map2 extends Component {
  state = {
    fatalBox: false,
    fatalOne: {
      lat: null,
      lng: null
    }
  };

  static defaultProps = {
    center: {
      lat: 39.0,
      lng: -105.15
    },
    zoom: 7
  };

  handleAccidents = () => {
    if (this.state.fatalBox === false) {
      this.setState({
        fatalBox: true,
        fatalOne: {
          lng: -104.833889,
          lat: 39.516111
        }
      });
    }

    if (this.state.fatalBox === true) {
      this.setState({
        fatalBox: false,
        fatalOne: {
          lng: null,
          lat: null
        }
      });
    }
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="backGround">
        <center>
          <span className="filterBoxes">
            <input
              onClick={this.handleAccidents}
              name="Fatal Accidents"
              value="true"
              type="checkbox"
            />
            <img src={plane} alt="plane" width="15" height="15" />Show Fatal
            Accidents
          </span>
          <span className="filterBoxes">
            <input name="CDOT Mountain AWOS" type="checkbox" />
            <img src={awos} alt="awos" width="15" height="15" />Show CDOT
            Mountain AWOS
          </span>
          <span className="filterBoxes">
            <input name="Mountain Passes" type="checkbox" />
            <img src={mountain} alt="mountain" width="15" height="15" />Show
            Mountain Passes
          </span>
        </center>

        <div className="mapStyle">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_API_KEY
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <FatalAccidents
              lat={this.state.fatalOne.lat}
              lng={this.state.fatalOne.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map2;
