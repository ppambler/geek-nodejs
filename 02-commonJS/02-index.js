var a = require('./02-module-exports');
a.on('ready', function () {
  console.log('module a is ready');
});
console.log(1)