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

class Map extends Component {
  state = {
    fatalBox: false
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
    var longRange = -106;

    const rootRef = firebase
      .database()
      .ref()
      .child("ROWS")
      .child("ROW");

    rootRef.on("value", snap => {
      libSize = snap.numChildren();
    });

    for(var i = 0; i < libSize; i++){
        var longRef = rootRef.child(i).child("Longitude");
        longRef.on("value", snap => {
            lngP[i] = snap.val();
        })
        var latRef = rootRef.child(i).child("Latitude");
        latRef.on("value", snap => {
            latP[i] = snap.val();
        })
    }

    for (i = 0; i < libSize; i++) {
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
            <input name="CDOT Mountain AWOS" type="checkbox" />
            <img src={awos} alt="awos" width="15" height="15" />
            Show CDOT Mountain AWOS
          </span>
          <span className="filterBoxes">
            <input name="Mountain Passes" type="checkbox" />
            <img src={mountain} alt="mountain" width="15" height="15" />
            Show Mountain Passes
          </span>
        </center>

        <div className="mapStyle">
          <GoogleMapReact
            bootstrapURLKeys={
              {
                //key: process.env.REACT_APP_API_KEY
              }
            }
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.createFatalPoints()}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
