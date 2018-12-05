import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import * as firebase from "firebase/app";
import "firebase/database";
import "../style/map.css";
import "../style/button.css";

import plane from "../img/new_crash.png";
import awos from "../img/ge_Mt_AWOS.png";
import mountain from "../img/new_Mt_pass.png";

var staticData = null;

const FatalAccidents = ({ lat, lng, link }) => (
  <div className="tooltip">
    <img src={plane} alt="plane" />
    <span className="tooltiptext">
      Accident Information: <br />
      Lat: {lat} <br />
      Lng: {lng} <br />
      <a href={link} target="_blank" rel="noopener noreferrer">
        {"NTSB Database Link"}
      </a>
      <i />
    </span>
  </div>
);

const MountainPasses = ({ lat, lng, pass }) => (
  <div className="tooltip">
    <img src={mountain} alt="mountain pass" />
    <span className="tooltiptext">
      Mountain Pass: <br />
      {pass} <br />
      Lat: {lat} <br />
      Lng: {lng} <br />
      <i />
    </span>
  </div>
);

const AWOS = ({ lat, lng, loc, freq }) => (
  <div className="tooltip">
    <img src={awos} alt="Mountain AWOS" />
    <span className="tooltiptext">
      Mountain AWOS site: <br />
      {loc} <br />
      Lat: {lat} <br />
      Lng: {lng} <br />
      Freq: {freq}
      <i />
    </span>
  </div>
);

function initializeDatabase() {
  const firstDatabase = {
    databaseURL: "https://state-aviation-admin.firebaseio.com"
  };
  firebase.initializeApp(firstDatabase);

  const secondDatabase = {
    databaseURL: "https://state-aviation-m-1538090440532.firebaseio.com"
  };
  staticData = firebase.initializeApp(secondDatabase, "secondDatabase");
}
initializeDatabase();

class Map extends Component {
  state = {
    fatalBox: false,
    passBox: false,
    awosBox: false
  };

  static defaultProps = {
    center: {
      lat: 39.0,
      lng: -105.15
    },
    zoom: 8
  };

  createFatalPoints = () => {
    let points = [];
    var latP = [];
    var lngP = [];
    var eventID = [];
    var objectKeys = [];
    var libSize = 0;
    var distKey = null;

    const rootRef = firebase
      .database()
      .ref()
      .child("Fatal");

    rootRef.on("value", snap => {
      libSize = snap.numChildren();
    });

    try {
      for (var i = 0; i < libSize; i++) {
        // eslint-disable-next-line
        rootRef.on("value", snap => {
          var dataSet = snap.val();
          objectKeys = Object.keys(dataSet);
        });

        var longRef = rootRef.child(objectKeys[i]).child("Longitude");
        // eslint-disable-next-line
        longRef.on("value", snap => {
          lngP[i] = snap.val().trim();
        });
        var latRef = rootRef.child(objectKeys[i]).child("Latitude");
        // eslint-disable-next-line
        latRef.on("value", snap => {
          latP[i] = snap.val().trim();
        });
        var idRef = rootRef.child(objectKeys[i]).child("EventID");
        // eslint-disable-next-line
        idRef.on("value", snap => {
          eventID[i] =
            "https://app.ntsb.gov/pdfgenerator/ReportGeneratorFile.ashx?EventID=" +
            snap.val().trim() +
            "&AKey=1&RType=HTML&IType=FA";
        });
      }
    } catch (error) {
      return;
    }

    if (this.state.fatalBox === true) {
      for (i = 0; i < libSize; i++) {
        distKey = "Fatal: " + i;
        points.push(
          <FatalAccidents
            key={distKey}
            lat={latP[i]}
            lng={lngP[i]}
            link={eventID[i]}
          />
        );
      }
    }
    return points;
  };

  createPasses = () => {
    let passPoints = [];
    var latP = [];
    var lngP = [];
    var pass = [];
    var libSize = 0;
    var distKey = null;

    const rootRef = firebase
      .database(staticData)
      .ref()
      .child("MountainPasses");

    rootRef.on("value", snap => {
      libSize = snap.numChildren();
    });

    for (var i = 1; i < libSize; i++) {
      var longRef = rootRef.child(i).child("Longitude");
      // eslint-disable-next-line
      longRef.on("value", snap => {
        lngP[i] = snap.val();
      });
      var latRef = rootRef.child(i).child("Latitude");
      // eslint-disable-next-line
      latRef.on("value", snap => {
        latP[i] = snap.val();
      });
      var passRef = rootRef.child(i).child("Pass");
      // eslint-disable-next-line
      passRef.on("value", snap => {
        pass[i] = snap.val();
      });
    }

    if (this.state.passBox === true) {
      for (i = 0; i < libSize; i++) {
        distKey = "Pass: " + i;
        passPoints.push(
          <MountainPasses
            key={distKey}
            lat={latP[i]}
            lng={lngP[i]}
            pass={pass[i]}
          />
        );
      }
    }
    return passPoints;
  };

  createAwos = () => {
    let awosPoints = [];
    var latP = [];
    var lngP = [];
    var awos = [];
    var freq = [];
    var libSize = 0;
    var distKey = null;

    const rootRef = firebase
      .database(staticData)
      .ref()
      .child("AWOS");

    rootRef.on("value", snap => {
      libSize = snap.numChildren();
    });

    for (var i = 0; i < libSize; i++) {
      var longRef = rootRef.child(i).child("Longitude");
      // eslint-disable-next-line
      longRef.on("value", snap => {
        lngP[i] = snap.val();
      });
      var latRef = rootRef.child(i).child("Latitude");
      // eslint-disable-next-line
      latRef.on("value", snap => {
        latP[i] = snap.val();
      });
      var awosRef = rootRef.child(i).child("Location");
      // eslint-disable-next-line
      awosRef.on("value", snap => {
        awos[i] = snap.val();
      });
      var freqRef = rootRef.child(i).child("Frequency");
      // eslint-disable-next-line
      freqRef.on("value", snap => {
        freq[i] = snap.val();
      });
    }

    if (this.state.awosBox === true) {
      for (i = 0; i < libSize; i++) {
        distKey = "AWOS: " + i;
        awosPoints.push(
          <AWOS
            key={distKey}
            lat={latP[i]}
            lng={lngP[i]}
            loc={awos[i]}
            freq={freq[i]}
          />
        );
      }
    }
    return awosPoints;
  };

  handleAccidents = () => {
    if (this.state.fatalBox === false) {
      this.setState({
        fatalBox: true
      });
    }

    if (this.state.fatalBox === true) {
      this.setState({
        fatalBox: false
      });
    }
  };

  handlePasses = () => {
    if (this.state.passBox === false) {
      this.setState({
        passBox: true
      });
    }

    if (this.state.passBox === true) {
      this.setState({
        passBox: false
      });
    }
  };

  handleAwos = () => {
    if (this.state.awosBox === false) {
      this.setState({
        awosBox: true
      });
    }

    if (this.state.awosBox === true) {
      this.setState({
        awosBox: false
      });
    }
  };

  render() {
    return (
      <div className="backGround">
        <center className="filterGroup">
          <button
            className="button one"
            onClick={this.handleAccidents}
            name="Fatal Accidents"
          >
            <img
              src={plane}
              className="image"
              alt="plane"
              width="21"
              height="21"
            />
            Show Fatal Accidents
          </button>
          <button
            className="button two"
            onClick={this.handleAwos}
            name="CDOT Mountain AWOS"
          >
            <img
              src={awos}
              className="image"
              alt="awos"
              width="21"
              height="21"
            />
            Show CDOT Mountain AWOS
          </button>
          <button
            className="button three"
            onClick={this.handlePasses}
            name="Mountain Passes"
          >
            <img
              src={mountain}
              className="image"
              alt="mountain"
              width="21"
              height="21"
            />
            Show Mountain Passes
          </button>
        </center>

        <div className="mapStyle">
          <GoogleMapReact
            bootstrapURLKeys={
              {
                /* key: Enter google maps api key here */
              }
            }
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.createFatalPoints()}
            {this.createPasses()}
            {this.createAwos()}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
