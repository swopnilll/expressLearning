const express = require("express");

const app = express();

app.use("/support", (request, response, next) => {
    response.send("<h2>Support Page</h2>");
})

app.use("/", (request, response, next) => {
    response.send("<h1>Index Page</h1>");
});

app.listen(3000);
