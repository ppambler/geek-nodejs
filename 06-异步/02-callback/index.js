
var count = 0

interview((err, res) => {
  if (err) {
    console.log('第一个异步任务')
    return console.log('cry')
  }
  count++
  if (count == 2) {
    console.log('第一个异步任务')
    console.log(res)
    console.log('smile')
  }
})

interview((err, res) => {
  if (err) {
    console.log('第二个异步任务')
    return console.log('cry')
  }
  count++
  if (count == 2) {
    console.log('第二个异步任务')
    console.log(res)
    console.log('smile')
  }
})

// try {
// interview(function (err) {
//   if (err) {
//     return console.log('cry at 1st round')
//   }

//   interview(function (err) {
//     if (err) {
//       return console.log('cry at 2nd round')
//     }

//     interview(function (err) {
//       if (err) {
//         return console.log('cry at 3rd round')
//       }
//       console.log('smile')
//     })
//   })
// })
// } catch (e) {
//   console.log('cry', e)
// }
function interview(callback) {

  setTimeout(() => {
    if (Math.random() < 0.5) {
      callback(null, 'success')
    } else {
      callback(new Error('fail'))
    }
  }, 500)

}