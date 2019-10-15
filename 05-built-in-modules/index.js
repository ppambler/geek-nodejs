// const os = require('os');
// console.log(`This processor architecture is ${process.arch}`);
// console.log(`This processor architecture is ${os.arch()}`);
// console.log(`This processor architecture is ${os.cpus()}`);
// console.log(os.cpus())
// console.log(os.cpus().length)

// console.log(os.freemem() / 1024)

class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  say() {
    console.log(`我叫${this.name}`)
    return 'xxx'
  }
  static area(height, width) {
    return height * width
  }
}

class Square extends Polygon {
  // constructor(length) {
  //   // super(length, length);
  //   // this.xx = 'Square';
  // }
}

let squ = new Square(5, 6)
console.log(squ)
console.log(squ.say())
console.log(Square.area(5, 6))