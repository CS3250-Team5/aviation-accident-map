import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import Map from "./components/map"

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
