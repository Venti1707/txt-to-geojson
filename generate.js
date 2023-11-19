const C = require("chalk");

console.time(C.magentaBright("Time taken"));
var fs = require("fs");
var index = require("./index.js");

const args = process.argv.slice(2).reduce((acc, arg) => {
  const [k, v] = arg.split("=");
  acc[k.toLowerCase()] = v;
  return acc;
}, {});

const inputFilePath = `${args["input"]}.txt`;
if (!fs.existsSync(args["input"]) && !fs.existsSync(inputFilePath)) {
  console.error(C.redBright("The input file you specified does not exist."));
  console.timeEnd(C.magentaBright("Time taken"));
  process.exit();
}

if (fs.existsSync(inputFilePath)) {
  args["input"] = inputFilePath;
}

if (args["output"] === undefined) {
  const lastDotIndex = args["input"].lastIndexOf(".");
  if (lastDotIndex !== -1) {
    args["output"] = args["input"].slice(0, lastDotIndex);
  } else {
    args["output"] = args["input"];
  }
  console.warn(C.hex("#FFA500")(`You did not specify an output file name. The input file name has been used as a default.`));
}

const saveToFile = (data) => {
  fs.writeFile(`${args["output"]}.geojson`, data, (err) => {
  });
};

function saveRoute() {
  const contents = fs.readFileSync(`${args["input"]}`, "utf8");
  const data = index(contents);
  saveToFile(data);
  console.log(C.greenBright("Your GEOJSON route has been saved."));
  console.timeEnd(C.magentaBright("Time taken"));
}

if (fs.existsSync(`${args["output"]}.geojson`)) {
  console.warn(C.hex("#FFA500")("The output file already exists and has been overwritten."));
  saveRoute();
} else {
  saveRoute();
}