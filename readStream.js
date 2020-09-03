const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");

let fileText = "";

console.log("Type something...");

readStream.on("data", (data) => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileText += data;
});

readStream.once("data", (data) => {
  console.log(data);
});

readStream.once("end", () => {
  console.log("Finished reading file");
  console.log(`In total I read ${fileText.length - 1} characters of text`);
});
