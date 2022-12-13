const url = require("url");

const { URL } = url;
const myUrl = new URL(
  "http://www.gitbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("new URL()", myUrl);
console.log("url.format()", url.format(myUrl));
console.log("-------------------------------");
const parsedUrl = url.parse(
  "http://www.gitbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"
);
console.log("url.parse()", parsedUrl);
console.log("url.format()", url.format(parsedUrl));
