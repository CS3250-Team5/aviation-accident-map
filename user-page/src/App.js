import React, { Component } from "react";
import Map from "./components/map";
import Map2 from "./components/map2";
import Banner from "./components/banner";
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Map2 />
      </div>
    );
  }
}

export default App;
