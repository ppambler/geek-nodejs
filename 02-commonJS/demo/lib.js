console.log('Hello!  CommonJS')
exports.xxx = 'Hello，World！'
exports.add = function (a, b) {
  return a + b
}
exports.geekbang = {
  hello: 'world'
}
module.exports = function minus(a, b) {
  return a - b
}

setTimeout(() => {
  console.log(exports)
}, 4000)
