const EventEmitter = require('events')

// console.log(EventEmitter)

class Geektime extends EventEmitter {
  // constructor() {
  //   super()
  //   setInterval(() => {
  //     console.log(this)
  //     this.emit('newLesson', {
  //       price: Math.random() * 1000
  //     })
  //   }, 3000)
  // }
}

const geektime = new Geektime()
geektime.on('newLesson', ({ price }) => {
  console.log('有新课程上线了')
  console.log(price)
  if (price < 80) {
    console.log('buy')
  }
})

geektime.emit('newLesson', {
  price: Math.random() * 100
})

// setTimeout(() => {
//   geektime.setMaxListeners(200)
//   for (let i = 0; i < 100; i++) {
//     geektime.on('newLesson', ({ price }) => {

//     })
//   }
// }, 5000)