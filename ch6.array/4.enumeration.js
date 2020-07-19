const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// 배열 열거에 for in 은 권장되지 않음
// - 순서를 보장하지 않음
// - 프로토타입 체인에 있는 예상 못한 속성이 열겨될 수 있음
for (let n in numbers) {
  console.log(numbers[n]);
}

let i;
for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}
