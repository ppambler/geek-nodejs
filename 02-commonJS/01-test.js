var jquery = require('jquery');
exports.$ = jquery;
console.log(module);
console.log(exports)

var a = {
  id: '.',
  exports: { '$': [Function] },
  parent: null,
  filename: 'G:\\git-2019\\geek-nodejs\\02-commonJS\\01-test.js',
  loaded: false,
  children:
    [{
      id:
        'G:\\git-2019\\geek-nodejs\\node_modules\\jquery\\dist\\jquery.js',
      exports: [Function],
      parent: [Circular],
      filename:
        'G:\\git-2019\\geek-nodejs\\node_modules\\jquery\\dist\\jquery.js',
      loaded: true,
      children: [],
      paths: [Array]
    }],
  paths:
    ['G:\\git-2019\\geek-nodejs\\02-commonJS\\node_modules',
      'G:\\git-2019\\geek-nodejs\\node_modules',
      'G:\\git-2019\\node_modules',
      'G:\\node_modules']
}

var b = { '$': [Function] }