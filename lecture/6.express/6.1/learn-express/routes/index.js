const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  req.session.name = "hello";
  res.sendFile(path.join(__dirname, "../index.html"));
});

module.exports = router;
