const http = require("http");

const express = require("express");

const app = express();

app.use((request, response, next) => {
    console.log('In the middleware')
    next(); // helps us go to next middleware.
});

app.use((request, response, next) => {
    console.log('In the next middleware')
    response.send('<h1>Hello From Swopnil!</h1>')
});


app.listen(3000);