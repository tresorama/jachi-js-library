class Calculator {
  constructor(v) {
    this.v = v;
  }
  add(v) {
    this.v += v;
    return this;
  }
  sub(v) {
    this.v -= v;
    return this;
  }
  val() {
    return this.v;
  }
}
const cal = (num) => new Calculator(num);

const CALCULATOR_CHAIN = () => console.log(cal(2).add(5).sub(4).val());
