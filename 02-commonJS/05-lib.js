var counter = 3;
function incCounter() {
  counter++;
}
setTimeout(() => {
  console.log(counter) //4
}, 2000)
module.exports = {
  counter: counter,
  incCounter: incCounter,
};