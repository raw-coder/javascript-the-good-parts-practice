const empty = [];
const numbers = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

console.log(empty[1]); // undefined
console.log(numbers[1]); // 'one'

console.log(empty.length); // 0
console.log(numbers.length); // 10

// numbers_object도  number 배열과 유사하지만..
// - numbers가 Array.prototype을 상속한데 반하여 numbers_object는 Object.prototype을 상속함
// - length 속성이 없음
const numbers_object = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
};

// Javascript의 배열은 요소들이 모두 같은 데이터 타입일 필요는 없음
const misc = [
  'string',
  98.6,
  true,
  false,
  null,
  undefined,
  [1, 2, 3],
  {key: 'value'},
  NaN,
  Infinity,
];
console.log(misc.length);
