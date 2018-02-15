const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const port = require("./config.js");
const apiKey = require('./config.js');
const gmaps = require("./config.js");

const server = express();

server.use(bodyParser.json());

fetch(apiKey)
  .then(res => res.json())
  .then(json => console.log(json));

server.listen(port, err => {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`Server Listening on Port ${port}`);
  }
});
