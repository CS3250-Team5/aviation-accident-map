import React, { Component } from "react";
import Papa from "papaparse";
import * as firebase from "firebase/app";
import "firebase/database";
import "../style/window.css";

var libSize = 0;
var validData = true;
var accNumbers = [];

function initializeDatabase() {
  const fatalDatabase = {
    databaseURL: "https://aviation-accident-map-admin.firebaseio.com"
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
    pi: "none",
    p0: "block",
    p1: "none",
    p2: "none",
    p3: "none",
    p4: "none",
    pf: "none",
    over: "none",
    an1: "fadein 2s ease",
    ani: "",
    an2: "",
    an3: "",
    an4: "",
    an5: "",
    anf: "",
    showButton: "",
    step3Head: "",
    step3Body: "",
    step3Body2: "",
    selectValue: "",
    uploadName: "Upload local file",
    dis: "not-allowed",
    progDisp: "none",
    progDisp2: "none",
    validType: false,
    clickedStep1: false,
    clickedStep2: false,
    inProgBar1: false,
    inProgBar2: false,
    downUpDis: true,
    first: true,
    progWidth: 0,
    progWidth2: 0,
    data: null,
    selectedFile: null,
    jsonResults: null,
    sentToDatabase: null,
    jsonFiltered: [],
    objectKeys: [],
    headers: [],
    fullJson: [],
    processedJson: []
  };

  readFatalData = () => {
    const rootRef = firebase
      .database()
      .ref()
      .child("Fatal");

    rootRef.on("value", snap => {
      libSize = snap.numChildren();
    });

    rootRef.on("value", snap => {
      var dataSet = snap.val();
      if (dataSet === null) {
        this.setState({ objectKeys: 0 });
      } else {
        this.setState({ objectKeys: Object.keys(dataSet) });
      }
    });
  };

  writeFatalData = () => {
    var filteredPoints = this.state.sentToDatabase;
    var totalEntries = filteredPoints.Fatal.length;
    var isFound = false;

    const rootRef = firebase
      .database()
      .ref()
      .child("Fatal");

    for (var i = 0; 0 < libSize--; i++) {
      var accNum = rootRef
        .child(this.state.objectKeys[i])
        .child("AccidentNumber");
      // eslint-disable-next-line
      accNum.on("value", snap => {
        accNumbers[i] = snap.val();
      });
    }

    for (var x = 0; x < totalEntries; x++) {
      isFound = false;
      for (var y = 0; y < this.state.objectKeys.length && !isFound; y++) {
        if (filteredPoints.Fatal[x].AccidentNumber === accNumbers[y]) {
          isFound = true;
          break;
        }
      }

      if (isFound === false) {
        //push non duplicate data to database
        let item = filteredPoints.Fatal[x];
        rootRef.push(item);
      }
    }
  };

  progressBar = () => {
    if (this.state.progWidth !== 100 && this.state.downUpDis === false) {
      this.setState({ progDisp: "block" });

      this.intervals = setInterval(() => {
        if (this.state.progWidth !== 99) {
          this.setState({
            progWidth: this.state.progWidth + 1
          });
        }
      }, 50);
    }
    this.setState({ inProgBar1: true });
  };

  progressBar2 = () => {
    if (this.state.progWidth2 !== 100) {
      this.setState({ progDisp2: "block" });
      this.intervals = setInterval(() => {
        if (this.state.progWidth2 !== 99) {
          this.setState({
            progWidth2: this.state.progWidth2 + 1
          });
        }
      }, 50);
    }
    this.setState({ inProgBar2: true });
  };

  updateData(result) {
    const data = result.data;
    this.setState({ jsonResults: data });
  }

  searchingFor(term) {
    return x => {
      if (this.state.first === true) {
        this.state.headers.push(x);
        this.setState({ first: false });
      }
      try {
        if (
          x[4].includes(term) &&
          parseInt(x[7], 10) <= -105 &&
          parseInt(x[7], 10) >= -108 &&
          x[19].includes("91") &&
          !x[10].includes("Non") &&
          !this.state.jsonFiltered.includes(x)
        ) {
          this.state.jsonFiltered.push(x);
        }
      } catch (error) {
        validData = false;
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
      try {
        object.push(total);
      } catch (error) {
        return;
      }
    }
    var temp = JSON.stringify(this.state.fullJson);
    this.setState({ fullJson: temp });
  };

  handleChange = e => {
    this.setState({ selectValue: e.target.value });
  };

  stepThreePanelChecked = () => {
    var checkedPanel = [];
    if (validData) {
      checkedPanel.push(
        <div className="pannel3" key="validData">
          <button id="back" onClick={this.backButton3}>
            Back
          </button>
          <h3 className="text3">Step 3 :</h3>
          <p className="text3h">
            Filtered by state, longitide between(-108,-105), <br />
            and fatal accidents
          </p>
          <button className="button3" onClick={this.stepThreePanel}>
            Next
          </button>
        </div>
      );
    } else {
      checkedPanel.push(
        <div className="pannel3" key="invalidData">
          <button id="back" onClick={this.backButton3}>
            Back
          </button>
          <h3 className="text3">Error :</h3>
          <br />
          <p className="text3h">Unreadable file</p>
          <p className="text3h">Please provide a valid file</p>
        </div>
      );
    }

    return checkedPanel;
  };

  uploadStuff = event => {
    if (event.target.value.length === 0) {
      return;
    }
    var extension = event.target.files[0].name.split(".");
    extension = extension[1];

    if (!event.target.files[0] || extension !== "txt") {
      window.alert("*Invalid file chosen!*");
      return;
    } else {
      this.setState({
        uploadName: event.target.files[0].name,
        dis: "pointer",
        downUpDis: false,
        validType: true,
        selectedFile: event.target.files[0]
      });
    }
  };

  welcomePanel = () => {
    this.setState({
      an1: "fadeOutLeft 1.5s ease",
      ani: "fadeInLeft 2s ease",
      pi: "block"
    });
  };

  instructionsPanel = () => {
    this.readFatalData();
    this.setState({
      ani: "fadeOutLeft 1.5s ease",
      an2: "fadeInLeft 2s ease",
      p1: "block"
    });
  };

  stepOnePanel = () => {
    if (!this.state.clickedStep1) {
      this.progressBar();
      if (this.state.downUpDis === true || this.state.validType === false) {
        window.alert("*Please upload valid data file!*");
        this.setState({ clickedStep1: false });
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

        if (this.state.progWidth === 100) {
          this.setState({ progWidth: 0 });
          this.intervals = setInterval(() => {
            if (this.state.progWidth !== 99) {
              this.setState({
                progWidth: this.state.progWidth + 1
              });
            }
          }, 50);
        }
        this.setState({ clickedStep1: true });
      }
    }
  };

  stepTwoPanel = () => {
    if (!this.state.clickedStep2) {
      this.setState({ clickedStep2: true });
      if (this.state.selectValue === "CO") {
        this.filter();
        this.jasonify();
        if (this.state.progWidth2 === 100) {
          this.setState({ progWidth2: 0 });
          this.intervals = setInterval(() => {
            if (this.state.progWidth2 !== 99) {
              this.setState({
                progWidth2: this.state.progWidth2 + 1
              });
            }
          }, 50);
        }
        this.progressBar2();
      } else {
        window.alert("*Available for Colorado only*");
        this.setState({ clickedStep2: false });
      }
    }

    if (validData) {
      this.setState({
        step3Head: "Step 3 : ",
        step3Body:
          "Filtered by state, type of accident, and between -108 and -105 longitude",
        step3Body2: "",
        showButton: ""
      });
    } else {
      this.setState({
        step3Head: "Error : ",
        step3Body: "Unreadable file",
        step3Body2: "Please upload a valid file",
        showButton: "none"
      });
    }
  };

  stepThreePanel = () => {
    this.setState({
      an4: "fadeOutLeft 1.5s  ease",
      an5: "fadeInLeft 2s ease",
      p4: "block",
      fullJson: []
    });
  };

  stepFourPanel = () => {
    this.writeFatalData();
    this.setState({
      an5: "fadeOutLeft 1.5s  ease",
      anf: "fadeInLeft 2s ease",
      pf: "block"
    });
  };

  backButton6 = () => {
    this.setState({
      an6: "fadeInRight 1.5s ease",
      an7: "fadeOutRight 2s ease",
      p4: "block"
    });
  };

  backButton = () => {
    if (!this.state.inProgBar1) {
      this.setState({
        ani: "fadeInRight 1.5s ease",
        an2: "fadeOutRight 2s ease",
        pi: "block"
      });
    }
  };

  backButtoni = () => {
    this.setState({
      an1: "fadeInRight 1.5s ease",
      ani: "fadeOutRight 2s ease",
      p0: "block"
    });
  };

  backButton2 = () => {
    if (!this.state.inProgBar2) {
      this.setState({
        an2: "fadeInRight 1.5s ease",
        an3: "fadeOutRight 2s ease",
        p1: "block",
        progDisp: "none",
        clickedStep1: false,
        inProgBar1: false,
        progWidth: 0
      });
    }
  };

  backButton3 = () => {
    validData = true;
    this.setState({
      an3: "fadeInRight 1.5s ease",
      an4: "fadeOutRight 2s ease",
      p2: "block",
      progDisp2: "none",
      clickedStep2: false,
      inProgBar2: false,
      progWidth2: 0
    });
  };

  backButton4 = () => {
    this.setState({
      an4: "fadeInRight 1.5s ease",
      an5: "fadeOutRight 2s ease",
      p3: "block"
    });
  };

  backButton5 = () => {
    this.setState({
      an5: "fadeInRight 1.5s ease",
      anf: "fadeOutRight 2s ease",
      p4: "block"
    });
  };

  backButton6 = () => {
    this.setState({
      an6: "fadeInRight 1.5s ease",
      an7: "fadeOutRight 2s ease",
      p4: "block"
    });
  };
  backButtonl = () => {
    this.setState({
      over: "none"
    });
  };

  overlay = () => {
    this.setState({
      over: "block"
    });
  };

  render() {
    if (this.state.progWidth === 99) {
      this.setState({
        an2: "fadeOutLeft 1.5s ease",
        an3: "fadeInLeft 2s ease",
        p2: "block",
        progWidth: 100
      });
      clearInterval(this.intervals);
    }

    if (this.state.progWidth2 === 99) {
      this.setState({
        an3: "fadeOutLeft 1.5s  ease",
        an4: "fadeInLeft 2s ease",
        p3: "block",
        progWidth2: 100
      });
      clearInterval(this.intervals);
    }

    return (
      <React.Fragment>
        <div className="allpannels">
          <div
            className="p0cont"
            style={{ display: this.state.p0, animation: this.state.an1 }}
          >
            <div className="pannel0">
              <h3 className="text0">Welcome Admin</h3>
              <p className="text0h">Get Started!</p>
              <br />
              <button className="button0" onClick={this.welcomePanel}>
                Update Accident Map
              </button>
            </div>
          </div>

          <div
            className="picont"
            style={{ display: this.state.pi, animation: this.state.ani }}
          >
            <div className="panneli">
              <br />
              <h3 className="texti">Purpose:</h3>
              <p className="textih">
                This web app filters through data and uploads the information
                pertaining to fatal accidents to a database. Data will be from
                txt files downloaded by the user of this app from the NTSB. In
                the following steps you will upload NTSB data to a firebase
                server that will reflect on the aviation accident map.
              </p>

              <button className="buttoni" onClick={this.instructionsPanel}>
                Continue
              </button>
            </div>
          </div>

          <div
            className="p1cont"
            style={{ display: this.state.p1, animation: this.state.an2 }}
          >
            <div className="pannel1">
              <button id="back" onClick={this.backButton}>
                Back
              </button>
              <h3 className="text1">Step 1 :</h3>
              <p className="text1h">Upload data from NTSB (.txt file only)</p>
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
                >
                  {this.state.progWidth}%
                </label>
                <div
                  className="progBar"
                  style={{ width: String(this.state.progWidth + "%") }}
                />
              </div>
              <div
                className="mob"
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
                      accept=".txt"
                      onChange={this.uploadStuff}
                    />
                  </label>
                </div>
              </div>
              <div>
                <button
                  className="button1"
                  onClick={this.stepOnePanel}
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
              <button id="back" onClick={this.backButton2}>
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
                >
                  {this.state.progWidth2}%
                </label>
                <div
                  className="progBar"
                  style={{ width: String(this.state.progWidth2 + "%") }}
                />
              </div>
              <p className="text2h">
                Choose State:
                <select
                  value={this.state.selectValue}
                  onChange={this.handleChange}
                  className="dropdown"
                >
                  <option value="" />
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>{" "}
              </p>
              <button className="button2" onClick={this.stepTwoPanel}>
                Filter by state
              </button>
            </div>
          </div>

          <div
            className="p3cont"
            style={{ display: this.state.p3, animation: this.state.an4 }}
          >
            <div className="pannel3" key="validData">
              <button id="back" onClick={this.backButton3}>
                Back
              </button>
              <h3 className="text3">{this.state.step3Head}</h3> <br />
              <p className="text3h">{this.state.step3Body}</p>
              <p className="text3h">{this.state.step3Body2}</p>
              <button
                className="button3"
                onClick={this.stepThreePanel}
                style={{ display: this.state.showButton }}
              >
                Next
              </button>
            </div>
          </div>

          <div
            className="p4cont"
            style={{ display: this.state.p4, animation: this.state.an5 }}
          >
            <div className="pannel4">
              <button id="back" onClick={this.backButton4}>
                Back
              </button>
              <h3 className="text4">Step 4 :</h3>
              <br />
              <p className="text4h">Upload Data</p>
              <br />
              <button className="button4" onClick={this.stepFourPanel}>
                Finish
              </button>
            </div>
          </div>

          <div
            className="pfcont"
            style={{ display: this.state.pf, animation: this.state.anf }}
          >
            <div className="pannel4">
              <button id="back" onClick={this.backButton5}>
                Back
              </button>
              <h3 className="text4">Congratulations!</h3>
              <br />
              <p className="text4h">
                The fatal points <br /> have been uploaded!
              </p>
              <br />
              <a
                href="https://aviation-accident-map-user.firebaseapp.com/"
                id="link2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "5px", marginTop: "5px" }}
              >
                NTSB fatal accident map
              </a>

              <button
                id="link2"
                style={{ marginLeft: "5px", marginTop: "5px" }}
                onClick={this.overlay}
              >
                About us
              </button>
            </div>
          </div>
        </div>
        <div className="babyover" style={{ display: this.state.over }}>
          <p
            style={{
              marginTop: "15px",
              fontSize: "1.5em",
              marginBottom: "0px"
            }}
          >
            This admin page was created by team 5:
          </p>
          <a
            href="https://github.com/CS3250-Team5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Team5
          </a>
          <p
            style={{ marginTop: "5px", fontSize: "1.5em", marginBottom: "0px" }}
          >
            Members:
          </p>
          <a
            href="https://github.com/beavelar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brian Avelar
          </a>
          <br />
          <a
            href="https://github.com/devond5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devon DeSpain
          </a>
          <br />
          <a
            href="https://github.com/Monce32"
            target="_blank"
            rel="noopener noreferrer"
          >
            Monce Romero
          </a>
          <br />
          <a
            href="https://github.com/Fduranji"
            target="_blank"
            rel="noopener noreferrer"
          >
            Francisco Duran
          </a>
          <br />
          <a
            href="https://github.com/MuchoE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angel Cecena
          </a>
          <br />
          <button id="back" onClick={this.backButtonl}>
            Back
          </button>
        </div>
        <div className="overlay" style={{ display: this.state.over }} />
      </React.Fragment>
    );
  }
}

export default Window;
