const fs = require("fs");

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});

const fs_promise = require("fs").promises;

fs_promise
  .readFile("./readme.txt")
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });

(async () => {
  let data = await fs_promise.readFile("./readme.txt");
  console.log(data);
  console.log(data.toString());
})();
