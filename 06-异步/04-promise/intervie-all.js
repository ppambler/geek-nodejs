function interview(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 50%的几率通过这个面试
      if (Math.random() > 0.5) {
        resolve('success')
      } else {
        let error = new Error('fail')
        error.name = name
        reject(error)
      }
    }, 500)
  }
  )
}

Promise.all([
  interview('geekbang').catch(err => {
    return err
  }),
  interview('tencent').catch(err => {
    return err
  })
]).then((data) => {
  console.log(data)
  console.log('smile')
}).catch((err) => {
  console.log('cry for ' + err.name)
})
