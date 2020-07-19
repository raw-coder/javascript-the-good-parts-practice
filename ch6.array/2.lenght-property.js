const myArray = [];

console.log(myArray.length);

myArray[100000] = true;

console.log(myArray.length); // length 는 가장 큰 정수 속성값

const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
numbers.length = 3; // length 변경하여 뒷 쪽 index 내용 삭제

console.log(numbers);

// 가장 뒤쪽에 추가
numbers[numbers.length] = 'hello';
console.log(numbers);

numbers.push('bye');
console.log(numbers);
