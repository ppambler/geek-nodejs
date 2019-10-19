(function () {
  const promise = new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
      reject(new Error('hi'))
      console.log(5)
    }, 500)
    console.log(2)
  })
  console.log(3)
  console.log(promise)
  setTimeout(() => {
    console.log(promise)
    console.log(6)
  }, 800)
  console.log(4)
})()