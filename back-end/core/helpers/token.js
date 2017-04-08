'use strict';

const LEN = 16;
const crypto = require('crypto');
//generateToken
function generateToken(randomBytes, callback) {
  if (typeof randomBytes === 'function') {
    callback = randomBytes;
    randomBytes = LEN;
  }

  // we will return the token in `hex`
  randomBytes = randomBytes / 2;

  crypto.randomBytes(randomBytes, (err, buf) => {
    if (err) {
      return callback(err);
    }

    var token = buf.toString('hex');

    callback(null, token);
  });
};


module.exports.generate = generateToken;
