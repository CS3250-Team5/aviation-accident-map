import React, { Component } from "react";
//import Window from "./components/window.jsx";
import Window from "./components/test.jsx";

import "./style/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <div className="clouds" />
        </div>
        <Window />
      </div>
    );
  }
}

export default App;
