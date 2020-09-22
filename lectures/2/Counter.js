class Counter {
  constructor() {
    let count = 0;
    this.click = () => count += 1
    this.getCount = () => count.toLocaleString()
  }
}

const counter = new Counter();

counter.click();
counter.click();
counter.click();

console.log(
  counter.getCount()
);