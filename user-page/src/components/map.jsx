import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import * as firebase from "firebase";
// eslint-disable-next-line
import ids from "../reader.js";
import "../style/map.css";

import plane from "../images/ge_crash.png";
import awos from "../images/ge_Mt_AWOS.png";
import mountain from "../images/ge_Mt_pass0.png";

const FatalAccidents = ({ lat, lng, link }) => (
  <div className="tooltip">
    <img src={plane} alt="plane" />
    <span className="tooltiptext">
      Accident Information: <br />
      Lat: {lat} <br />
      Lng: {lng} <br />
      <a href={link} target="_blank">
        {"NTSB Database Link"}
      </a>
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
    </span>
  </div>
);

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
    zoom: 7
  };

  createFatalPoints = () => {
    var latP = [];
    var lngP = [];
    var eventID = [];
    let points = [];
    var libSize = 0;

    const rootRef = firebase
      .database()
      .ref()
      .child("ROWS")
      .child("ROW");

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
      var idRef = rootRef.child(i).child("EventId");
      // eslint-disable-next-line
      idRef.on("value", snap => {
        eventID[i] =
          "https://app.ntsb.gov/pdfgenerator/ReportGeneratorFile.ashx?EventID=" +
          snap.val() +
          "&AKey=1&RType=HTML&IType=FA";
      });
    }

    if (this.state.fatalBox === true) {
      for (i = 0; i < 100; i++) {
        points.push(
          <FatalAccidents lat={latP[i]} lng={lngP[i]} link={eventID[i]} />
        );
      }
    }

    return points;
  };

  createPasses = () => {
    var latP = [];
    var lngP = [];
    var pass = [];
    let passPoints = [];
    var libSize = 37;

    const rootRef = firebase
      .database()
      .ref()
      .child("MountainPasses");

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
        passPoints.push(
          <MountainPasses lat={latP[i]} lng={lngP[i]} pass={pass[i]} />
        );
      }
    }

    return passPoints;
  };

  createAwos = () => {
    var latP = [];
    var lngP = [];
    var awos = [];
    var freq = [];
    let awosPoints = [];
    var libSize = 12;

    const rootRef = firebase
      .database()
      .ref()
      .child("AWOS");

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
        awosPoints.push(
          <AWOS lat={latP[i]} lng={lngP[i]} loc={awos[i]} freq={freq[i]} />
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
            <img src={plane} alt="plane" width="15" height="15" />
            Show Fatal Accidents
          </span>
          <span className="filterBoxes">
            <input
              onClick={this.handleAwos}
              name="CDOT Mountain AWOS"
              type="checkbox"
            />
            <img src={awos} alt="awos" width="15" height="15" />
            Show CDOT Mountain AWOS
          </span>
          <span className="filterBoxes">
            <input
              onClick={this.handlePasses}
              name="Mountain Passes"
              type="checkbox"
            />
            <img src={mountain} alt="mountain" width="15" height="15" />
            Show Mountain Passes
          </span>
        </center>

        <div className="mapStyle">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD-vzgtNUpbsNbSgipj0gflcT3Gokqia-U"
            }}
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
