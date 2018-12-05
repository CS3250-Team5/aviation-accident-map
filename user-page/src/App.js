import React, { Component } from "react";
import Map from "./components/map";
import Banner from "./components/banner";
import About from "./components/about";
import "./style/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Map />
        <About />
      </div>
    );
  }
}

export default App;
