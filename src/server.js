'use strict';

const express = require('express');
const validator = require('./middleware/validator');
const handleError500 = require('./error-handlers/500');
const handleError404 = require('./error-handlers/404');
const logger = require('./middleware/logger');
const app = express();



app.get('/person', logger, validator);

app.use(handleError500);
app.use('*', logger, handleError404);

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Server Listening on ${PORT}`);
    });
  },
};   
