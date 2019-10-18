const eventloop = {
  queue: [],
  loop() {
    while (this.queue.length) {
      // 模拟把排头的元素弹出去，交给 V8，让V8把这个cb搞到Call Stack里边执行！
      const cb = this.queue.shift()
      cb()
    }
    // setTimeout(() => {
    //   console.log('每隔50ms看看queue是否有元素')
    //   this.loop()
    // }, 50)
    // bind返回这一个指定了this的新loop函数，当然也可以使用上边的箭头函数，
    // 毕竟箭头函数里边的this值指向的是上一级作用域里边this值，而且函数this值是在定义时确定的，可不是在callback调用时确定的！
    setTimeout(this.loop.bind(this), 50)

    // 这里的this则是Timeout对象，cb.call(timeout)，我们这里的eventloop写的过于简单，并没有体现给callback传参数
    // setTimeout(function () {
    //   console.log(this)
    // }, 50)
  },
  add(callback) {
    this.queue.push(callback)
  }
}

eventloop.loop()

setTimeout(() => {
  // 模拟有一个异步任务完成了，事件循环就完任务队列里边添加元素，即添加callback
  eventloop.add(() => {
    console.log('callback 500ms')
  })
}, 500)

setTimeout(() => {
  eventloop.add(() => {
    console.log('callback 800ms')
  })
}, 800)