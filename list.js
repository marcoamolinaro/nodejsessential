const fs = require("fs");

//console.log("Start reading files...");
//const files = fs.readdirSync("./assets");
fs.readdir("./assets", (err, files ) => {

    if (err) {
        throw err;
    }

    console.log("Complete...");

    console.log(files);
});

console.log("Start reading files...");
