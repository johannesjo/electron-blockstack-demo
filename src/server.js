var express = require('express');
var app = express();
var cors = require('cors');

var server = app.listen(9877);
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": true,
  "optionsSuccessStatus": 204
}));

app.get('/manifest.json', function (req, res) {
  res.sendFile(__dirname + '/manifest.json');
});

app.get("/callback", function (req, res) {
  process.send({authResponse: req.query.authResponse});
});

process.on('message', message => {
  server.close();
});
