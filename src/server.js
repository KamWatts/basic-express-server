'use strict'

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

function logger(request, response, next) {
  console.log('Express app hit!');
  next();
}

app.use(logger);

app.get('/person', (request, response, next) => {
  const name = { name: request.query.name }
  response.send('You\'ve hit the person route')
  response.json(name);

});

app.post('/person', placeholder, (request, response, next) => {
  DataTransfer.push(request.query.message);
  response.json(data);
})

module.exports = {
  app,
  start: (PORT) => app.listen(PORT)
};