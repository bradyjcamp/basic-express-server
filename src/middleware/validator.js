'use strict';

const validator = (req, res, next) => {
  if (req.query.name) {
    res.status(200).send(req.query);
  } else {
    next({status: 500, message:'query request parameter error'});
  }
};

module.exports = validator;