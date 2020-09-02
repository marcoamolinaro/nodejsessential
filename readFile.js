const fs = require("fs");

//const text = fs.readFileSync("./assets/Readme.md", "utf-8");

// fs.readFile("./assets/Readme.md", "utf-8", (err, text) => {
//   console.log("File contents read");
//   console.log(text);
// });

fs.readFile("./assets/alex.jpg", (err, img) => {
  if (err) {
    console.log(`An error has ocorred: ${err.message}`);
    process.exit();
  }
  console.log("File contents read");
  console.log(img);
});
