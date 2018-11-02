import React, { Component } from "react";
import * as firebase from "firebase";
import ids from "../reader.js";

class Base extends Component {
  state = {
    parse: 0,
    boolean: false,
    data: "Not Clciked",
    fatalOne: {
      lat: "fatal one"
    },
    fatalTwo: {
      lat: "fatal two"
    }
  };

  handleData = () => {
    let iterate = 0;
    var event = [];
    var testRef = null;
    const rootRef = firebase
      .database()
      .ref()
      .child("ROWS")
      .child("ROW");

    for (var i = 0; i < 3; i++) {
      testRef = rootRef.child(iterate).child("EventId");
      testRef.on("value", snap => {
        event[i] = snap.val();
      });
      iterate++;
    }

    var parser = 0;
    if (this.state.boolean === false) {
      parser = 0;
      this.setState({
        parse: 0,
        boolean: true,
        data: event[parser],
        // eslint-disable-next-line
        parse: parser++,
        fatalOne: {
          lat: event[parser]
        },
        // eslint-disable-next-line
        parse: parser++,
        fatalTwo: {
          lat: event[parser]
        }
      });
    }

    if (this.state.boolean === true) {
      this.setState({
        boolean: false,
        data: "Not Clicked",
        fatalOne: {
          lat: "fatal one"
        },
        fatalTwo: {
          lat: "fatal two"
        }
      });
    }
  };

  render() {
    return (
      <div>
        <center>
          <span className="filterBoxes">
            <input onClick={this.handleData} type="checkbox" />
            Change Data
          </span>
        </center>
        <h1>{this.state.data}</h1>
        <h1>{this.state.fatalOne.lat}</h1>
        <h1>{this.state.fatalTwo.lat}</h1>
      </div>
    );
  }
}

export default Base;
