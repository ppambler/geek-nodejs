(function () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('3'))
    }, 300)
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
  console.log(promise)
  setTimeout(() => {
    console.log(promise)
  }, 800)
})()