const express = require("express");

const bodyParser = require("body-parser");

const router = require("./router");

const app = express();

app.use(router);

app.listen(3000);
  