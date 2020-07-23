// string.charAt(pos)
// - 문자열에서 pos 위치에 있는 문자를 반환
const name = 'Steve';
const initial = name.charAt(0);

console.log(initial); // S

// string.charCodeAt(pos)
// - 문자열에서 pos 위치에 있는 문자 코드 반환
const initialCode = name.charCodeAt(0);

console.log(initialCode); // 83

// string.concat(string...)
// - 문자열 연결
const s = 'C'.concat('a', 't');

console.log(s); // Cat

// string.indexOf(searchString, position)
// - 문자열에서 searchString을 검색하여 첫번째로 일치하는 문자의 위치를 반환, 없으면 -1
// - position 검색 시작 위치
const text = 'Mississippi';
console.log(text.indexOf('pp')); // 8
console.log(text.indexOf('ss', 3)); // 5
console.log(text.indexOf('ss', 6)); // -1

// string.lastIndexOf(searchString, position)
// - 뒤에서 부터 검색하는 indexOf
console.log(text.lastIndexOf('ss')); // 5
console.log(text.lastIndexOf('ss', 3)); // 2
console.log(text.lastIndexOf('ss' , 6)); // 5

// string.localeCompare(that)
// - 문자열 비교: 적은 경우 음수, 같으면 음수, 크면 양수 리턴
// - array.sort 의 comparator 와 유사...
console.log('a'.localeCompare('b')); // -1

const m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
m.sort(function (a, b) {
  return a.localeCompare(b);
})

console.log(m); // [ 'a', 'A', 'aa', 'Aa', 'aaa', 'AAA' ]

//


