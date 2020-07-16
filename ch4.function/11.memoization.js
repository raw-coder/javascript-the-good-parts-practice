// Memoization : 불필요한 작업을 줄이기 위해 이전에 연산한 결과를 저장
const fibonacci = function() {
  let memo = [0, 1];
  let fib = function (n) {
    let result = memo[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  }
  return fib;
}();

for (let i = 0; i < 100; i += 1) {
  console.log(fibonacci(i));
}
