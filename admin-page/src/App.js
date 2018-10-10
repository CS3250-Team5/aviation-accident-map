import React, { Component } from "react";
import "./App.css";

void function p0t1() {};

class App extends Component {
  constructor() {
    super();
    this.state = {
      p0: "block",
      p1: "none",
      p2: "none",
      p3: "none",
      p4: "none",
      pf: "none",
      an1:"fadein 2s ease",
      an2:"",
      an3:"",
      an4:"",
      an5:"",
      anf:""
    };
  }

  p0t1 = () => {
    console.log(this.state.display);
    this.setState({
      an1:"fadeOutLeft 1.5s ease",
      an2:"fadeInLeft 2s ease",
      p1:"block"
    });
  };

  p1t2 = () => {
    console.log(this.state.display);
    this.setState({
      an2:"fadeOutLeft 1.5s ease",
      an3:"fadeInLeft 2s ease",
      p2:"block"
    });
  };
  p2t3 = () => {
    console.log(this.state.display);
    this.setState({
      an3:"fadeOutLeft 1.5s  ease",
      an4:"fadeInLeft 2s ease",
      p3:"block"
    });
  };
  p3t4 = () => {
    console.log(this.state.display);
    this.setState({
      an4:"fadeOutLeft 1.5s  ease",
      an5:"fadeInLeft 2s ease",
      p4:"block"
    });
  };
  p4tf = () => {
    console.log(this.state.display);
    this.setState({
      an5:"fadeOutLeft 1.5s  ease",
      anf:"fadeInLeft 2s ease",
      pf:"block"
    });
  };

  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="clouds" />
        </div>

        <div className="allpannels">
          <div className="p0cont" style={{ display: this.state.p0, animation: this.state.an1 }}>
            <div className="pannel0">
              <h3 className="text0">Welcome Admin</h3>
              <p className="text0h">Get Started!</p>
              <button className="button0" onClick={this.p0t1}>
                Update Accident Map
              </button>
            </div>
          </div>

          <div className="p1cont" style={{ display: this.state.p1, animation: this.state.an2 }}>
            <div className="pannel1">
              <h3 className="text1">Step 1 :</h3>
              <p className="text1h">Download Data from NTSB</p>
              <button className="button1" onClick={this.p1t2}>
                Download
              </button>
            </div>
          </div>

          <div className="p2cont" style={{ display: this.state.p2, animation: this.state.an3 }}>
            <div className="pannel2">
              <h3 className="text2">Step 2 :</h3>
              <p className="text2h">
                Choose State:
                <select className="dropdown">
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
              <button className="button2" onClick={this.p2t3}>
                Next
              </button>
            </div>
          </div>

          <div className="p3cont" style={{ display: this.state.p3, animation: this.state.an4 }}>
            <div className="pannel3">
              <h3 className="text3">Step 3 :</h3>
              <p className="text3h">Filtering Results...</p>
              <button className="button3" onClick={this.p3t4}>
                Next
              </button>
            </div>
          </div>

          <div className="p4cont" style={{ display: this.state.p4,animation: this.state.an5 }}>
            <div className="pannel4">
              <h3 className="text4">Step 4 :</h3>
              <p className="text4h">Upload Data</p>
              <button className="button4" onClick={this.p4tf}>
                Finish
              </button>
            </div>
          </div>

          <div className="pfcont" style={{ display: this.state.pf, animation:this.state.anf }}>
            <div className="pannelf">
              <h3 className="textf">!(Congradulations your data is updated)</h3>
              <div className="circle">
                <p className="textfh">Done!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
