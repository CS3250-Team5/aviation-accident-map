/*

-------------------------FOR STATIC DATA-------------------------

import "./eventIDs.txt";

// Testing purposes only
var eventIDs = [
  "20160620X21154",
  "20160518X42840",
  "20160302X14248",
  "20160115X22543",
  "20151109X40213"
];

// How can you read a file and put data from file to this array?
var ids = [];

function setIDs() {
  // i < 5 for this specific case, while loop may be used in the end
  for (var i = 0; i < 5; i++) {
    ids[i] = eventIDs[i];
  }
}

setIDs();
*/

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAq40sdfJBLTMyzTa1vTle2CahMVM_f-No",
  authDomain: "state-aviation-m-1538090440532.firebaseapp.com",
  databaseURL: "https://state-aviation-m-1538090440532.firebaseio.com",
  projectId: "state-aviation-m-1538090440532",
  storageBucket: "state-aviation-m-1538090440532.appspot.com",
  messagingSenderId: "510612508615"
};
firebase.initializeApp(config);

var ids = [];

function setIDs() {
  let iterate = 0;
  const rootRef = firebase
    .database()
    .ref()
    .child("ROWS")
    .child("ROW");

  for (var i = 0; i < 3; i++) {
    const testRef = rootRef.child(iterate).child("EventId");
    testRef.on("value", snap => {
      ids[i] = snap.val();
    });
    iterate++;
  }
}

setIDs();
export default ids;
