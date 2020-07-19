const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

console.log(typeof numbers); // object

// javascript 의 배열은 type이 object이므로 array를 구분할 수 있는 함수가 필요함

const isArray = function(value) {
  return value &&
    typeof value === 'object' &&
    typeof value.length === 'number' &&
    typeof value.splice === 'function' &&
    !(value.propertyIsEnumerable('length')); // 배열의 length는 열거가능하지 않음
}
