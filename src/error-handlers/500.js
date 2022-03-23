'use strict';

function handleError500(err, req, res, next){
  console.log('Error', err);
  res.status(500).send('query parameters error');
  next();
}

module.exports = handleError500;
