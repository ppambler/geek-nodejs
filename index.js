console.log('start require')
let lib = require('./lib')
console.log('end require')

lib.additional = 'test'
console.log(lib)
