console.log('我是lib.js模块')

exports.x = '我是x变量的字符串值'

module.exports = function add(a, b) {
  return a + b
}

setTimeout(() => {
  console.log(exports)
})