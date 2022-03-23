'use strict';

const express = require('express');
const validator = require('./middleware/validator');
const handleError500 = require('./error-handlers/500');
const handleError404 = require('./error-handlers/404');
const logger = require('./middleware/logger');
const app = express();


app.use(express.json());

app.use(logger);

app.get('/person', validator, (req, res, next) => {
  res.send({name: req.query.name});
});


app.use(handleError404);
app.use(handleError500);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server Listening on ${PORT}`);
    });
  },
};   
