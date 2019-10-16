const glob = require('glob')

console.time('sync')
console.log(__dirname) //当前文件所在绝对目录
const res = glob.sync(__dirname + '/**/*')
console.log(res)
console.timeEnd('sync')

console.log(res.length)


console.time('async')

const res2 = glob(__dirname + '/**/*', function (err, result) {
  console.log(result)
  console.log(result.length)
})

console.timeEnd('async')

// IO完成之前还可以干别的事

console.log('系统之前有了第二个输入，但其输出还没收到，就轮到我这第三个输入了')

