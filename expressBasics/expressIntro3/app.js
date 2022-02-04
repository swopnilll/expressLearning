const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
    console.log("In second middleware");
    res.send("<h1>Users Page </h1>");
  });

app.use("/", (req, res, next) => {
  console.log("in first middleware");
  res.send("<h1>Home page</h1>");
});

app.listen(3000);
