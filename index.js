const C = require('chalk');

function uniqueResults(value, index, self) {
  return self.indexOf(value) === index;
}

const generateGEOSJSON = (sortedArray) =>

// properties I tags that you can copy and paste between lines 25 and 26; Read README.md to understand the accepted values!
// If you choose to incorporate more then one tag, they need to be separated by commas

/*

\t\t\t\t"stroke": ""
\t\t\t\t"stroke-width": 
\t\t\t\t"stroke-opacity": 

*/

`{
\t"type": "FeatureCollection",
\t"features": [
\t\t{
\t\t\t"type": "Feature",
\t\t\t"properties": {
\t\t\t},
\t\t\t"geometry": {
\t\t\t\t"type": "LineString",
\t\t\t\t"coordinates": [
${sortedArray
    .map((p) => {
      var [lat, lon] = p.split(",");
      lat = lat.trim();
      lon = lon.trim();

      // Check for errors within latitude values
      if (lat.length === 0) {
        console.error(C.redBright("There is a missing latitude value somewhere, please check your input file again."));
        process.exit();
      }

      if (isNaN(lat)) {
        console.error(C.redBright("One of the latitude values is not a number, please check your input file again."));
        process.exit();
      }

      if (lat > 90 || lat < -90) {
        console.error(C.redBright("One of the latitude values falls outside the acceptable range, please check your input file again."));
        process.exit();
      }

      // Check for errors within longitude values
      if (lon.length === 0) {
        console.error(C.redBright("There is a missing longitude value somewhere, please check your input file again."));
        process.exit();
      }

      if (isNaN(lon)) {
        console.error(C.redBright("One of the longitude values is not a number, please check your input file again."));
        process.exit();
      }

      if (lon > 180 || lon < -180) {
        console.error(C.redBright("One of the longitude values falls outside the acceptable range, please check your input file again."));
        process.exit();
      }

      return `\t\t\t\t\t[
\t\t\t\t\t\t${+lon},
\t\t\t\t\t\t${+lat}
\t\t\t\t\t]`;
    })
    .join(`,\n`)
  }
\t\t\t\t]
\t\t\t}
\t\t},
${sortedArray
    .map((p) => {
      var [lat, lon, loc] = p.split(",");
      lat = lat.trim();
      lon = lon.trim();
      loc = loc.trim();

      // Check for errors within latitude values
      if (lat.length === 0) {
        console.error(C.redBright("There is a missing latitude value somewhere, please check your input file again."));
        process.exit();
      }

      if (isNaN(lat)) {
        console.error(C.redBright("One of the latitude values is not a number, please check your input file again."));
        process.exit();
      }

      if (lat > 90 || lat < -90) {
        console.error(C.redBright("One of the latitude values falls outside the acceptable range, please check your input file again."));
        process.exit();
      }

      // Check for errors within longitude values
      if (lon.length === 0) {
        console.error(C.redBright("There is a missing longitude value somewhere, please check your input file again."));
        process.exit();
      }

      if (isNaN(lon)) {
        console.error(C.redBright("One of the longitude values is not a number, please check your input file again."));
        process.exit();
      }

      if (lon > 180 || lon < -180) {
        console.error(C.redBright("One of the longitude values falls outside the acceptable range, please check your input file again."));
        process.exit();
      }

      // Check for errors within location values
      if (loc == "undefined") {
        console.error(C.redBright("There is a missing location somewhere, please check your input file again."));
        process.exit();
      }

// properties II tags that you can copy and paste between lines 137 and 138; Read README.md to understand the accepted values!
// If you choose to incorporate at least one tag, they need to be separated by commas

/*

\t\t\t\t"marker-color": ""
\t\t\t\t"marker-size": ""
\t\t\t\t"marker-symbol": ""

*/

      return `\t\t{
\t\t\t"type": "Feature",
\t\t\t"properties": {
\t\t\t\t"name": "${loc}"
\t\t\t},
\t\t\t"geometry": {
\t\t\t\t"type": "Point",
\t\t\t\t"coordinates": [
\t\t\t\t\t${+lon},
\t\t\t\t\t${+lat}
\t\t\t\t]
\t\t\t}
\t\t}`;
    })
    .join(`,\n`)
  }
\t]
}`;

const GEOJSON = (contents) => {
  const coordsArray = contents.split("\r\n").filter(uniqueResults); // Comment out .filter(uniqueResults) if you accept duplicate values
  var sortedArray;
  sortedArray = coordsArray.map((coords) => {
    const [lat, lon, loc] = coords.split(",");
    return `${lat},${lon},${loc}`;
  });

  return generateGEOSJSON(sortedArray);
};

module.exports = GEOJSON;