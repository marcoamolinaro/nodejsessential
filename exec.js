const cp = require("child_process");
/*
cp.exec("open http://www.linkedin.com/learning");
cp.exec("open -a Terminal .");
cp.exec("ls -l", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

cp.exec("lst -l", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

cp.exec("lst -l", (err, data, stderr) => {
  console.log(stderr);
});

*/
cp.exec("node readStream", (err, data, stderr) => {
    console.log(data);
  });