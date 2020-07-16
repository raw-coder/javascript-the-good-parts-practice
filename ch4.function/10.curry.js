// curry : 함수와 인수를 결합
const add = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers',
    };
  }
  return a + b;
}

Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

Function.method('curry', function() {
  const slice = Array.prototype.slice;
  const args = arguments;
  const that = this;
  return function() {
    console.log(args);
    return that.apply(null, args.concat(slice.apply(arguments)));
  }
})

const add1 = add.curry(1);
console.log(add1(6));
