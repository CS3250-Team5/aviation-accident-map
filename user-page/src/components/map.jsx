import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../style/map.css";
//import Markers from "./accidents"

import plane from "../images/ge_crash.png";
import awos from "../images/ge_Mt_AWOS.png";
import mountain from "../images/ge_Mt_pass0.png";

//const AnyReactComponent
//conts have to be uppercase
const FatalAccidents = ({ text }) => (
  <div>
    <img src={plane} alt="plane" />
    {text}
  </div>
);
//const MountainPasses = ({text}) => <div><img src={mountain} alt="mtnPass"/>{text}</div>;

class Map extends Component {
  state = {
    fatalOne: {
      lat: null,
      lng: null
    },
    fatalTwo: {
      lat: null,
      lng: null
    },
    fatalThree: {
      lat: null,
      lng: null
    },
    fatalFour: {
      lat: null,
      lng: null
    },
    fatalFive: {
      lat: null,
      lng: null
    },
    fatalSix: {
      lat: null,
      lng: null
    },
    fatalSeven: {
      lat: null,
      lng: null
    },
    fatalEight: {
      lat: null,
      lng: null
    },
    fatalNine: {
      lat: null,
      lng: null
    },
    fatalTen: {
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
    this.setState(prevState => ({
      fatalOne: {
        ...prevState.fatalOne,
        lat: 39.516111
      }
    }));
    this.setState(prevState => ({
      fatalOne: {
        ...prevState.fatalOne,
        lng: -104.833889
      }
    }));
    this.setState(prevState => ({
      fatalTwo: {
        ...prevState.fatalTwo,
        lat: 39.46
      }
    }));
    this.setState(prevState => ({
      fatalTwo: {
        ...prevState.fatalTwo,
        lng: -105.663333
      }
    }));
    this.setState(prevState => ({
      fatalThree: {
        ...prevState.fatalThree,
        lat: 39.41
      }
    }));
    this.setState(prevState => ({
      fatalThree: {
        ...prevState.fatalThree,
        lng: -107.21
      }
    }));
    this.setState(prevState => ({
      fatalFour: {
        ...prevState.fatalFour,
        lat: 40.267223
      }
    }));
    this.setState(prevState => ({
      fatalFour: {
        ...prevState.fatalFour,
        lng: -105.154167
      }
    }));
    this.setState(prevState => ({
      fatalFive: {
        ...prevState.fatalFive,
        lat: 38.8625
      }
    }));
    this.setState(prevState => ({
      fatalFive: {
        ...prevState.fatalFive,
        lng: -106.156944
      }
    }));
    this.setState(prevState => ({
      fatalSix: {
        ...prevState.fatalSix,
        lat: 37.822223
      }
    }));
    this.setState(prevState => ({
      fatalSix: {
        ...prevState.fatalSix,
        lng: -106.906111
      }
    }));
    this.setState(prevState => ({
      fatalSeven: {
        ...prevState.fatalSeven,
        lat: 38.495
      }
    }));
    this.setState(prevState => ({
      fatalSeven: {
        ...prevState.fatalSeven,
        lng: -102.29
      }
    }));
    this.setState(prevState => ({
      fatalEight: {
        ...prevState.fatalEight,
        lat: 39.1175
      }
    }));
    this.setState(prevState => ({
      fatalEight: {
        ...prevState.fatalEight,
        lng: -104.718334
      }
    }));
    this.setState(prevState => ({
      fatalNine: {
        ...prevState.fatalNine,
        lat: 40.052222
      }
    }));
    this.setState(prevState => ({
      fatalNine: {
        ...prevState.fatalNine,
        lng: -108.278611
      }
    }));
    this.setState(prevState => ({
      fatalTen: {
        ...prevState.fatalTen,
        lat: 38.830834
      }
    }));
    this.setState(prevState => ({
      fatalTen: {
        ...prevState.fatalTen,
        lng: -104.718334
      }
    }));
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
            <FatalAccidents
              lat={this.state.fatalTwo.lat}
              lng={this.state.fatalTwo.lng}
            />
            <FatalAccidents
              lat={this.state.fatalThree.lat}
              lng={this.state.fatalThree.lng}
            />
            <FatalAccidents
              lat={this.state.fatalFour.lat}
              lng={this.state.fatalFour.lng}
            />
            <FatalAccidents
              lat={this.state.fatalFive.lat}
              lng={this.state.fatalFive.lng}
            />
            <FatalAccidents
              lat={this.state.fatalSix.lat}
              lng={this.state.fatalSix.lng}
            />
            <FatalAccidents
              lat={this.state.fatalSeven.lat}
              lng={this.state.fatalSeven.lng}
            />
            <FatalAccidents
              lat={this.state.fatalEight.lat}
              lng={this.state.fatalEight.lng}
            />
            <FatalAccidents
              lat={this.state.fatalNine.lat}
              lng={this.state.fatalNine.lng}
            />
            <FatalAccidents
              lat={this.state.fatalTen.lat}
              lng={this.state.fatalTen.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
