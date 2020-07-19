Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

Array.method('reduce', function (f, value) {
  let i;
  for (i = 0; i < this.length; i += 1) {
    value = f(this[i], value);
  }
  return value;
});

const data = [4, 8, 15, 16, 23, 42];

const add = function(a, b) {
  return a + b;
}

const mult = function(a, b) {
  return a * b;
}

console.log(data.reduce(add, 0));
console.log(data.reduce(mult, 1));

data.total = function() {
  return this.reduce(add, 0);
}

console.log(data.total());
