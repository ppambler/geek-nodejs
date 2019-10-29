// 加个round参数代表是第几轮面试
function interview(round) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 80%的几率通过这个面试
      if (Math.random() > 0.2) {
        resolve('success')
      } else {
        let error = new Error('fail')
        error.round = round //通过error把这个轮次数给记下来，以此来知道我们是在第几轮失败的！
        reject(error)
      }
    }, 500)
  }
  )
}

var promise = interview(1)
  .then(() => {
    // 在then里边返回了一个新的promise，那么后续的操作都会等这个promise状态扭转之后才会继续执行
    return interview(2)
  })
  .then(() => {
    return interview(3)
  })
  .then(() => {
    // 三轮面试成功之后就开心的笑出来
    console.log('smile')
  })
  .catch((err) => {
    // 处理面试失败的情况，当我们的promise被reject的时候，就会忽略前边的then，然后跑到这第一个catch来执行！
    console.log('cry at ' + err.round + ' round !')
  })
