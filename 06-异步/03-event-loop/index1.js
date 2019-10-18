let done = 0
const eventloop = {
  queue: [],
  timeoutqueue: [],
  fsqueue: [],
  loop() {
    while (this.queue.length) {
      const cb = this.queue.shift()
      cb()
    }
    this.fsqueue.forEach(callback => {
      if (done) {
        const cb = this.fsqueue.shift()
        cb()
        done = 0
      }
    });
    setTimeout(this.loop.bind(this), 50)
  },
  add(queueType, callback) {
    switch (queueType) {
      case 'fswrite':
        this.fsqueue.push(callback)
        console.log(this)
        break;
      default:
        break;
    }
  }
}

eventloop.loop()
setTimeout(() => {
  eventloop.add('fswrite', () => {
    console.log('callback 800ms')
  })
}, 800)

setTimeout(() => {
  done = 1
}, 2000)