var EventEmitter = require('events').EventEmitter;
module.exports = new EventEmitter();

setTimeout(function () {
  module.exports.emit('ready');
}, 1000);