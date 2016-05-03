'use strict';

var os = require('os');
var Router = require('express').Router;


var keys = [
  'EOL',
  'arch',
  'cpus',
  'endianness',
  'freemem',
  'homedir',
  'hostname',
  'loadavg',
  'networkInterfaces',
  'platform',
  'release',
  'tmpdir',
  'totalmem',
  'type',
  'uptime'
];

function init(config, model, app) {
  var router = Router();

  // parent handler
  router['get']('/', function(req, res, next) {
    var info = {};
    keys.forEach(function(k) {
      info[k] = (typeof os[k] === 'function') ? os[k]() : os[k];
    });
    return res.json(info);
  });

  // handlers for each separate value
  keys.forEach(function(k) {
    router['get']('/'+k, function(req, res, next) {
      var info = (typeof os[k] === 'function') ? os[k]() : os[k];
      return res.json(info);
    });
  });

  return router;
}


module.exports = init;
module.exports.keys = keys;
