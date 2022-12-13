const spawn = require("child_process").spawn;

const process = spawn("python", ["lecture/3.노드기능/test.py"]);

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.stderr.on("data", function (data) {
  console.error(data.toString());
});
