const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myfile.txt", "utf-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "utf-8");
readStream.pipe(writeStream);
