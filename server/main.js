const express = require("express");
const app = new express();

app
  .get("/", (req, res) => {
    res.render("../app/index.ejs", {});
  })
  .use(express.static(__dirname + "/../app"))
  .listen(7777);
