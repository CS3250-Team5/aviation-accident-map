import React, { Component } from "react";
import Papa from "papaparse";
import * as firebase from "firebase/app";
import "firebase/database";
import "../style/window.css";

function initializeDatabase() {
  /*
  const tempDatabase = {
    databaseURL: "https://test-project-cfcd0.firebaseio.com"
  };
  firebase.initializeApp(tempDatabase, "tempDatabase");
  */
  const fatalDatabase = {
    databaseURL: "https://state-aviation-admin.firebaseio.com"
  };
  firebase.initializeApp(fatalDatabase);
}
initializeDatabase();

class Window extends Component {
  constructor(props) {
    // Call super class
    super(props);
    this.updateData = this.updateData.bind(this);
  }
  state = {
    p0: "block",
    p1: "block",
    p2: "none",
    p3: "none",
    p4: "none",
    pf: "none",
    an1: "fadeOutLeft 1.5s ease",
    an2: "fadeInLeft 2s ease",
    an3: "",
    an4: "",
    an5: "",
    anf: "",
    uploadName: "Upload local file",
    uploadDataStep: false,
    selectValue: "",
    downUpDis: true,
    dis: "not-allowed",
    progWidth: 0,
    progDisp: "none",
    progWidth2: 0,
    progDisp2: "none",
    data: null,
    selectedFile: null,
    jsonResults: null,
    jsonFiltered: [],
    sentToDatabase: null,
    headers: [],
    fullJson: [],
    first: true
  };

  writeFatalData = () => {
    var filteredPoints = this.state.sentToDatabase;
    var totalEntries = filteredPoints.Fatal.length;

    const rootRef = firebase
      .database()
      .ref()
      .child("Fatal");

    for (var i = 0; i < totalEntries; i++) {
      let item = filteredPoints.Fatal[i];
      rootRef.push(item);
    }
  };

  b1t0 = () => {
    this.setState({
      an1: "fadeInRight 1.5s ease",
      an2: "fadeOutRight 2s ease",
      p0: "block"
    });
  };

  b2t1 = () => {
    this.setState({
      an2: "fadeInRight 1.5s ease",
      an3: "fadeOutRight 2s ease",
      p1: "block"
    });
  };

  b3t2 = () => {
    this.setState({
      an3: "fadeInRight 1.5s ease",
      an4: "fadeOutRight 2s ease",
      p2: "block"
    });
  };

  b4t3 = () => {
    this.setState({
      an4: "fadeInRight 1.5s ease",
      an5: "fadeOutRight 2s ease",
      p3: "block"
    });
  };

  bft4 = () => {
    this.setState({
      an5: "fadeInRight 1.5s ease",
      anf: "fadeOutRight 2s ease",
      p4: "block"
    });
  };

  updateData(result) {
    const data = result.data;
    this.setState({ jsonResults: data });
  }

  p1t2 = () => {
    if (this.state.downUpDis === true) {
      window.alert("*You must upload NTSB data first*");
    } else {
      var ext = this.state.selectedFile.name;
      ext = ext.split(".");
      ext = ext[1];

      if (ext === "txt") {
        Papa.parse(this.state.selectedFile, {
          skipEmptyLines: true,
          complete: this.updateData
        });
      }
    }
    this.setState({ progWidth: 99 });
  };

  searchingFor(term) {
    return x => {
      if (this.state.first === true) {
        this.state.headers.push(x);
        this.setState({ first: false });
      }
      if (
        x[4].includes(term) &&
        parseInt(x[7], 10) <= -105 &&
        parseInt(x[7], 10) >= -108 &&
        x[4].includes("CO") &&
        x[19].includes("91") &&
        !x[10].includes("Non")
      ) {
        this.state.jsonFiltered.push(x);
      }
      return;
    };
  }

  filter = () => {
    var jsonLine = '{ "Fatal" : [';
    var jsonObj = null;
    var accidentNumber = null;
    var country = null;
    var eventDate = null;
    var eventID = null;
    var investigationType = null;
    var latitude = null;
    var location = null;
    var longitude = null;

    this.state.jsonResults
      .filter(this.searchingFor(", " + this.state.selectValue))
      // eslint-disable-next-line
      .map(loc => {});

    for (var i = 0; i < this.state.jsonFiltered.length; i++) {
      accidentNumber = JSON.stringify(this.state.jsonFiltered[i][2]);
      country = JSON.stringify(this.state.jsonFiltered[i][5]);
      eventDate = JSON.stringify(this.state.jsonFiltered[i][30]);
      eventID = JSON.stringify(this.state.jsonFiltered[i][0]);
      investigationType = JSON.stringify(this.state.jsonFiltered[i][1]);
      latitude = JSON.stringify(this.state.jsonFiltered[i][6]);
      location = JSON.stringify(this.state.jsonFiltered[i][4]);
      longitude = JSON.stringify(this.state.jsonFiltered[i][7]);

      jsonLine +=
        '{ "AccidentNumber" : ' +
        accidentNumber +
        ', "Country" : ' +
        country +
        ', "EventDate" : ' +
        eventDate +
        ', "EventID" : ' +
        eventID +
        ', "InvestigationType" : ' +
        investigationType +
        ', "Latitude" : ' +
        latitude +
        ', "Location" : ' +
        location +
        ', "Longitude" : ' +
        longitude;

      if (i + 1 < this.state.jsonFiltered.length) {
        jsonLine += " }, ";
      } else {
        jsonLine += " } ";
      }
    }

    jsonLine += "] }";
    jsonObj = JSON.parse(jsonLine);
    this.setState({ sentToDatabase: jsonObj });
  };

  jasonify = () => {
    var object = this.state.fullJson;

    for (var a = 0; a < this.state.jsonFiltered.length; a++) {
      var total = {};
      for (var b = 0; b < this.state.jsonFiltered[a].length; b++) {
        total[this.state.headers[0][b]] = this.state.jsonFiltered[a][b];
      }
      object.push(total);
    }
    var temp = JSON.stringify(this.state.fullJson);
    this.setState({ fullJson: temp });
  };

  handleChange = e => {
    this.setState({ selectValue: e.target.value });
  };

  p2t3 = () => {
    this.filter();
    this.jasonify();
    this.setState({
      progWidth2: 99,
      an4: "fadeOutLeft 1.5s  ease",
      an5: "fadeInLeft 2s ease",
      p4: "block"
    });
  };

  p4tf = () => {
    this.writeFatalData();
    this.setState({
      an5: "fadeOutLeft 1.5s  ease",
      anf: "fadeInLeft 2s ease",
      pf: "block",
      uploadDataStep: true
    });
  };

  uploadStuff = event => {
    if (!event.target.files[0]) {
      return;
    } else {
      this.setState({
        uploadName: event.target.files[0].name,
        downUpDis: false,
        dis: "pointer",
        selectedFile: event.target.files[0]
      });
    }
  };

  render() {
    if (this.state.progWidth === 99) {
      this.setState({
        an2: "fadeOutLeft 1.5s ease",
        an3: "fadeInLeft 2s ease",
        p2: "block",
        progWidth: 100
      });
    }

    if (this.state.progWidth2 === 99) {
      this.setState({
        an3: "fadeOutLeft 1.5s  ease",
        an4: "fadeInLeft 2s ease",
        p3: "block",
        progWidth2: 100
      });
    }

    return (
      <React.Fragment>
        <div className="allpannels">
          <div
            className="p1cont"
            style={{ display: this.state.p1, animation: this.state.an2 }}
          >
            <div className="pannel1">
              <button id="back" onClick={this.b1t0}>
                Back
              </button>
              <h3 className="text1">Step 1 :</h3>
              <p className="text1h">Upload Data from NTSB</p>
              <div
                className="progCont"
                style={{ display: this.state.progDisp }}
              >
                <label
                  style={{
                    color: "white",
                    left: "47%",
                    position: "absolute",
                    textShadow: "1px 1px #000000"
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-around"
                }}
              >
                <a
                  href="https://www.ntsb.gov/_layouts/ntsb.aviation/index.aspx"
                  target="_blank"
                  id="link"
                  rel="noopener noreferrer"
                >
                  Link to NTSB data
                </a>

                <div id="labelcont">
                  <label id="label" htmlFor="myuniqueid">
                    {this.state.uploadName}
                    <input
                      type="file"
                      id="myuniqueid"
                      onChange={this.uploadStuff}
                    />
                  </label>
                </div>
              </div>
              <div>
                <button
                  className="button1"
                  onClick={this.p1t2}
                  style={{
                    marginTop: "10px",
                    cursor: this.state.dis,
                    width: "15em",
                    height: "3em"
                  }}
                >
                  Continue & upload data
                </button>
              </div>
            </div>
          </div>

          <div
            className="p2cont"
            style={{ display: this.state.p2, animation: this.state.an3 }}
          >
            <div className="pannel2">
              <button id="back" onClick={this.b2t1}>
                Back
              </button>

              <h3 className="text2">Step 2 :</h3>
              <div
                className="progCont"
                style={{ display: this.state.progDisp2 }}
              >
                <label
                  style={{
                    color: "white",
                    left: "47%",
                    position: "absolute",
                    textShadow: "1px 1px #000000"
                  }}
                />
              </div>
              <p className="text2h">Choose State:</p>
              <button className="button2" onClick={this.p2t3}>
                Filter by state
              </button>
            </div>
          </div>

          <div
            className="p4cont"
            style={{ display: this.state.p4, animation: this.state.an5 }}
          >
            <div className="pannel4">
              <button id="back" onClick={this.b4t3}>
                Back
              </button>
              <h3 className="text4">Step 4 :</h3>
              <p className="text4h">Upload Data</p>
              <button className="button4" onClick={this.p4tf}>
                Finish
              </button>
            </div>
          </div>

          <div
            className="pfcont"
            style={{ display: this.state.pf, animation: this.state.anf }}
          >
            <div className="pannelf">
              <button id="back" onClick={this.bft4}>
                Back
              </button>
              <br />
              <h3 className="textf">Points in log now</h3>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Window;
