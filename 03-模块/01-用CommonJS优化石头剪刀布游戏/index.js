// argv是个数组哈！拿到最后一项，即用户的输入，如rock
// let playerAction = process.argv[process.argv.length - 1]
// 假如用户咩有输入，默认ta就输个「rock」
// if (process.argv.length === 2) {
//   playerAction = 'rock'
// }
// console.log(playerAction)

const game = require('./game')
// const result = game(playerAction)
// console.log(result)
let count = 0
process.stdin.on('data', e => {
  // console.log(e)
  const playerAction = e.toString().trim()
  // console.log(playerAction)
  const result = game(playerAction)
  if (result == -1) {
    count++
  }
  if (count === 3) {
    console.log('好吧！人类，既然我输了三局，那我认输。')
    process.exit()
  }
})


