import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";
import * as firebase from 'firebase';
import registerServiceWorker from "./registerServiceWorker";
//import Map from "./components/map"

var config = {
   apiKey: "AIzaSyDNDuwXkLnJmF-pvCqFNabPyEFZ4m89yPE",
   authDomain: "test-project-cfcd0.firebaseapp.com",
   databaseURL: "https://test-project-cfcd0.firebaseio.com",
   projectId: "test-project-cfcd0",
   storageBucket: "test-project-cfcd0.appspot.com",
   messagingSenderId: "470912223206"
 };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
