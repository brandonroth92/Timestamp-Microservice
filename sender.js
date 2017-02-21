var exports = module.exports = {};

/*
 * I used res.writeHead and res.end to set custom header instead of using res.json
 * with the implied headers
 */

exports.validSend = function(res, unix, natural) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify({ unix: unix, natural: natural }));
};

exports.invalidSend = function(res) {
  res.writeHead(400, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify({ unix: null, natural: null }));
};