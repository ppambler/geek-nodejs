module.exports = function (playerAction) {
  if (['rock', 'scissor', 'paper'].indexOf(playerAction) == -1) {
    throw new Error('invalid playerAction');
  }
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
  console.log(`人类你出：${playerAction}`)
  console.log(`电脑我出：${computerAction}`)

  // 罗列电脑输的情况
  if (computerAction === playerAction) {
    console.log('平局')
    console.log('-----------')
    return 0
  } else if (
    (computerAction === 'rock' && playerAction === 'paper') ||
    (computerAction === 'scissor' && playerAction === 'rock') ||
    (computerAction === 'paper' && playerAction === 'scissor')
  ) {
    console.log('你赢了')
    console.log('-----------')
    return -1
  } else {
    console.log('你输了')
    console.log('-----------')
    return 1
  }

}