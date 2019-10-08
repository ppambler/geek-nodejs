// argv是个数组哈！拿到最后一项，即用户的输入，如rock
let playerAction = process.argv[process.argv.length - 1]
console.log(playerAction)

// 模拟人机随机出石头剪刀布
let random = Math.random() * 3
// console.log(random)

let computerAction

// 逻辑处理
if (random < 1) {
  computerAction = 'rock'
} else if (random > 2) {
  computerAction = 'scissor'
} else {
  computerAction = 'paper'
}

console.log(computerAction)

// 罗列电脑输的情况
if (computerAction === playerAction) {
  console.log('平局')
} else if (
  (computerAction === 'rock' && playerAction === 'paper') ||
  (computerAction === 'scissor' && playerAction === 'rock') ||
  (computerAction === 'paper' && playerAction === 'scissor')
) {
  console.log('你赢了')
} else {
  console.log('你输了')
}



