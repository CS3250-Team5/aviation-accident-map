import * as firebase from "firebase";

var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "test-project-cfcd0.firebaseapp.com",
  databaseURL: "https://test-project-cfcd0.firebaseio.com",
  projectId: "test-project-cfcd0",
  storageBucket: "test-project-cfcd0.appspot.com",
  messagingSenderId: "470912223206"
};
firebase.initializeApp(config);

var ids = [];

function setIDs() {
  let iterate = 0;
  var testRef = null;
  const rootRef = firebase
    .database()
    .ref()
    .child("ROWS")
    .child("ROW");

  for (var i = 0; i < 1000; i++) {
    testRef = rootRef.child(iterate).child("EventId");
    // eslint-disable-next-line
    testRef.on("value", snap => {
      ids[i] = snap.val();
    });
    testRef = rootRef.child(iterate).child("Latitude");
    // eslint-disable-next-line
    testRef.on("value", snap => {
      ids[i] = snap.val();
    });
    testRef = rootRef.child(iterate).child("Longitude");
    // eslint-disable-next-line
    testRef.on("value", snap => {
      ids[i] = snap.val();
    });
    iterate++;
  }
}

setIDs();
export default ids;
