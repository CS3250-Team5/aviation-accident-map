import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "../style/map.css";

import plane from "../images/ge_crash.png";
import awos from "../images/ge_Mt_AWOS.png";
import mountain from "../images/ge_Mt_pass0.png";

//testing popups with javascrip(jsx) and css
const FatalAccidents = ({ text, text2, link }) => (
  <div className="tooltip">
    <img src={plane} alt="plane" />
    <span className="tooltiptext">
        Accident Information: <br />
        Lat: {text} <br/>
        Lng: {text2} <br />
        NTSB Link: <a href="https://www.Google.com" target="_blank">{link}</a>
    </span>
  </div>
);

class Map extends Component {
  state = {
    fatalBox: false,
    randomBox: false,
    parse: 0,
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

  handleRandom = () => {
    const latMin = 38;
    const latMax = 41;
    const lngMin = -108;
    const lngMax = -103;
    var randLat = [];
    var randLng = [];
    var parser = 0;

    for (var i = 0; i < 9; i++) {
      var coord = latMin + Math.random() * (latMax - latMin);
      randLat[i] = coord;
    }

    for (i = 0; i < 5; i++) {
      coord = lngMin + Math.random() * (lngMax - lngMin);
      randLng[i] = coord;
    }

    if (this.state.randomBox === false) {
      parser = 0;
      this.setState({
        parse: 0,
        randomBox: true,
        fatalOne: {
          lat: randLat[parser],
          lng: randLng[parser]
        },
        // eslint-disable-next-line
        parse: parser++,
        fatalTwo: {
          lat: randLat[parser],
          lng: randLng[parser]
        },
        // eslint-disable-next-line
        parse: parser++,
        fatalThree: {
          lat: randLat[parser],
          lng: randLng[parser]
        },
        // eslint-disable-next-line
        parse: parser++,
        fatalFour: {
          lat: randLat[parser],
          lng: randLng[parser]
        },
        // eslint-disable-next-line
        parse: parser++,
        fatalFive: {
          lat: randLat[parser],
          lng: randLng[parser]
        }
      });
    }

    if (this.state.randomBox === true) {
      this.setState({
        parser: 0,
        randomBox: false,
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
        }
      });
    }
  };

  handleAccidents = () => {
    if (this.state.fatalBox === false) {
      this.setState({
        fatalBox: true,
        fatalSix: {
          lat: 37.822223,
          lng: -106.906111
        },
        fatalSeven: {
          lat: 38.495,
          lng: -102.29
        },
        fatalEight: {
          lat: 39.1175,
          lng: -104.718334
        },
        fatalNine: {
          lat: 40.052222,
          lng: -108.278611
        },
        fatalTen: {
          lat: 38.830834,
          lng: -104.718334
        }
      });
    }

    if (this.state.fatalBox === true) {
      this.setState({
        fatalBox: false,
        fatalSix: {
          lng: null,
          lat: null
        },
        fatalSeven: {
          lng: null,
          lat: null
        },
        fatalEight: {
          lng: null,
          lat: null
        },
        fatalNine: {
          lng: null,
          lat: null
        },
        fatalTen: {
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
              onClick={this.handleRandom}
              name="Random"
              value="false"
              type="checkbox"
            />
            <img src={plane} alt="plane" width="15" height="15" />Random
          </span>
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
              text={this.state.fatalOne.lat}
              text2={this.state.fatalOne.lng}
            />
            <FatalAccidents
              lat={this.state.fatalTwo.lat}
              lng={this.state.fatalTwo.lng}
              text={this.state.fatalTwo.lat}
              text2={this.state.fatalTwo.lng}
            />
            <FatalAccidents
              lat={this.state.fatalThree.lat}
              lng={this.state.fatalThree.lng}
              text={this.state.fatalThree.lat}
              text2={this.state.fatalThree.lng}
            />
            <FatalAccidents
              lat={this.state.fatalFour.lat}
              lng={this.state.fatalFour.lng}
              text={this.state.fatalFour.lat}
              text2={this.state.fatalFour.lng}
            />
            <FatalAccidents
              lat={this.state.fatalFive.lat}
              lng={this.state.fatalFive.lng}
              text={this.state.fatalFive.lat}
              text2={this.state.fatalFive.lng}
            />
            <FatalAccidents
              lat={this.state.fatalSix.lat}
              lng={this.state.fatalSix.lng}
              text={this.state.fatalSix.lat}
              text2={this.state.fatalSix.lng}
            />
            <FatalAccidents
              lat={this.state.fatalSeven.lat}
              lng={this.state.fatalSeven.lng}
              text={this.state.fatalSeven.lat}
              text2={this.state.fatalSeven.lng}
            />
            <FatalAccidents
              lat={this.state.fatalEight.lat}
              lng={this.state.fatalEight.lng}
              text={this.state.fatalEight.lat}
              text2={this.state.fatalEight.lng}
            />
            <FatalAccidents
              lat={this.state.fatalNine.lat}
              lng={this.state.fatalNine.lng}
              text={this.state.fatalNine.lat}
              text2={this.state.fatalNine.lng}
            />
            <FatalAccidents
              lat={this.state.fatalTen.lat}
              lng={this.state.fatalTen.lng}
              text={this.state.fatalTen.lat}
              text2={this.state.fatalTen.lng}
              link={"Click Me"}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
