'use strict';
function sendJSONresponse(prop, status) {
  return function(req, res, next) {
    res.status(200 || status).json(req.resources[prop]);
  }
}

module.exports.toJSON = sendJSONresponse;