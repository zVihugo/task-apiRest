var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var app = express();
var testRouter = require('./routes/test')


app.get("/", (req, res) => {
    res.json({status: true, msg: "Hello World!"})
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", testRouter)
app.use(bodyParser.json());

module.exports = app;