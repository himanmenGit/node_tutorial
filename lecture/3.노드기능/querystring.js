const url = require("url");
const querysting = require("querystring");

const parsedUrl = url.parse(
  "http://www.gitbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);
const query = querysting.parse(parsedUrl.query);
console.log("querystring.parse():", query);
console.log("querystring.stringify():", querysting.stringify(query));
