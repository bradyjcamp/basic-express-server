'use strict';

function handleError404(err, req, res, next){
  console.log('Error', err);
  res.status(404).send('not found');
  next();
}

module.exports = handleError404;