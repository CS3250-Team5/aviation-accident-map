import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import * as firebase from "firebase";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
