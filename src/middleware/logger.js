'use strict';

function logger(req, res, next){
  console.log(req.method);
  console.log(req.path);
  next();
}

module.exports = logger;