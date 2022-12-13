const fs = require("fs").promises;

fs.copyFile("readme3.txt", "writeme4.txt")
  .then(() => {
    console.log("파일 복사 완료");
  })
  .catch((err) => {
    console.error(err);
  });
