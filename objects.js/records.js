// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // console.log(records[id].prop,prop,value)
  let item = records[id][prop];

  if (!value) delete records[id][prop];
  if (prop !== "tracks" && value) records[id][prop] = value;
  if (prop === "tracks" && value && !item) records[id][prop] = [value];
  if (prop === "tracks" && value && item) records[id][prop] = [...item, value];
  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
);

//   if (prop !== 'tracks' && value) records[id].prop = value // this will set prop as property but not the exact key prop given
// In JavaScript, dot notation can't be used to dynamically set object properties because it expects the exact property name, not a variable.
