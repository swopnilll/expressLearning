const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  next();
});

app.use("/add-support", (req, res) => {
  res.send(
    "<form action='/support' method='POST'> <input type='text' name = 'title' /> <button>Add</button></form>"
  );
});

app.post("/support", (req, res) => {
  console.log(req.body.title);
  res.redirect("/add-support");
});

app.listen(3001);
