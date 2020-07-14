const sum = function () {
  let i, sum = 0;
  for (i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sum(4, 8, 15, 16, 23, 42));
