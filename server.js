const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const config = require('./config.js');
const port = config.port;
const key = config.gmaps.apiKey;

const server = express();

server.use(bodyParser.json());

const STATUS_SUCCESS = 200;
const STATUS_USER_ERROR = 422;

server.use(bodyParser.json());

server.post('/place', (req, res) => {
  if (!req.body.search) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'No search query provided' });
    return;
  }

  const URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=Pizza+in+Newton&key=${key}`;

  let data = fetch(URL)
    .then(res => res.json())
    .then(json => json)
    .catch(err => console.log(err));
    res.status(STATUS_SUCCESS);
    res.json(data);
  });

server.listen(port, err => {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`Server Listening on Port ${port}`);
  }
});

