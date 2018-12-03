import React, { Component } from "react";
import "../style/window.css";
import Papa from "papaparse";

var validData = true;

class Window extends Component {
  constructor(props) {
    // Call super class
    super(props);
    this.updateData = this.updateData.bind(this);
  }
  state = {
    p0: "block",
    p1: "none",
    p2: "none",
    p3: "none",
    p4: "none",
    pf: "none",
    an1: "fadein 2s ease",
    an2: "",
    an3: "",
    an4: "",
    an5: "",
    anf: "",
    uploadName: "Upload local file",
    validType: false,
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
    headers: [],
    fullJson: [],
    processedJson: [],
    first: true
  };

  welcomePanel = () => {
    this.setState({
      an1: "fadeOutLeft 1.5s ease",
      an2: "fadeInLeft 2s ease",
      p1: "block"
    });
  };

  backButton = () => {
    this.setState({
      an1: "fadeInRight 1.5s ease",
      an2: "fadeOutRight 2s ease",
      p0: "block"
    });
  };

  backButton2 = () => {
    this.setState({
      an2: "fadeInRight 1.5s ease",
      an3: "fadeOutRight 2s ease",
      p1: "block"
    });
  };

  backButton3 = () => {
    this.setState({
      an3: "fadeInRight 1.5s ease",
      an4: "fadeOutRight 2s ease",
      p2: "block"
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
  };

  updateData(result) {
    const data = result.data;
    this.setState({ jsonResults: data });
  }

  stepOnePanel = () => {
    this.progressBar();
    if (this.state.downUpDis === true || this.state.validType === false) {
      window.alert("*Please upload valid data file!*");
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
    }
  };

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
    this.state.jsonResults
      .filter(this.searchingFor(", " + this.state.selectValue))
      // eslint-disable-next-line
      .map(loc => {});
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

  stepTwoPanel = () => {
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
      window.alert("Psst* Try Colorado");
    }
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
            Filtered by state, longitide between(-108,-105), and fatal accidents
          </p>
          <button className="button3" onClick={this.stepThreePanel}>
            Next
          </button>
        </div>
      );
    } else {
      checkedPanel.push(
        <div className="pannel3" key="validData">
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

  stepThreePanel = () => {
    this.setState({
      an4: "fadeOutLeft 1.5s  ease",
      an5: "fadeInLeft 2s ease",
      p4: "block",
      fullJson: []
    });
  };

  stepFourPanel = () => {
    console.log(this.state.jsonFiltered);
    this.setState({
      an5: "fadeOutLeft 1.5s  ease",
      anf: "fadeInLeft 2s ease",
      pf: "block"
    });
  };

  uploadStuff = event => {
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
              <button className="button0" onClick={this.welcomePanel}>
                Update Accident Map
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
                >
                  {this.state.progWidth}%
                </label>
                <div
                  className="progBar"
                  style={{ width: String(this.state.progWidth + "%") }}
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
            {this.stepThreePanelChecked()}
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
              <p className="text4h">Upload Data</p>
              <button className="button4" onClick={this.stepFourPanel}>
                Finish
              </button>
            </div>
          </div>

          <div
            className="pfcont"
            style={{ display: this.state.pf, animation: this.state.anf }}
          >
            <div className="pannelf">
              <button id="back" onClick={this.backButton5}>
                Back
              </button>
              <br />
              <h3 className="textf">!(Congradulations your data is updated)</h3>
              <div className="circle">
                <p className="textfh">Done!</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Window;
