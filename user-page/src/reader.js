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
export default ids;
