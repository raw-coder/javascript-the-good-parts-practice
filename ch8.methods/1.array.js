// array.concat(item...)
const a = ['a', 'b', 'c'];
const b = ['x', 'y', 'z'];
const c = a.concat(b);

console.log(c); // [ 'a', 'b', 'c', 'x', 'y', 'z' ]

// array.join()
// 문자열 + 보다 배열에 넣고 join이 빠름
const a1 = ['a', 'b', 'c'];
a.push('d');
const c1 = a.join(' '); // a b c d

console.log(c1);

// array.pop()
const a2 = ['a', 'b', 'c'];
const c2 = a2.pop();

console.log(c2); // c

/*
Array.method('pop', function () {
  return this.splice(this.length - 1, 1)[0];
})
 */

// array.push(item)
const a3 = ['a', 'b', 'c'];
const b3 = ['x', 'y', 'z'];
const c3 = a3.push(b3, true);

console.log(c3); // 5
console.log(a3); // [ 'a', 'b', 'c', [ 'x', 'y', 'z' ], true ]

// array.reverse()
const a4 = ['a', 'b', 'c'];
const b4 = a4.reverse();

console.log(a4); // [ 'c', 'b', 'a' ]
console.log(b4); // [ 'c', 'b', 'a' ]

// array.shift()
// 배열의 첫번째 요소 제거하면서 리턴 (없으면 undefined)
// pop에 비해 매우 느림
const a5 = ['a', 'b', 'c'];
const c5 = a5.shift();

console.log(c5); // a
console.log(a5); // [ 'b', 'c' ]

// array.slice(start, end)
// start ~ end - 1 인덱스를 갖는 배열의 복사본 생성
const a6 = ['a', 'b', 'c'];
const b6 = a.slice(0, 1);
const c6 = a.slice(1);
const d6 = a.slice(1, 2);

console.log(b6); // [ 'a' ]
console.log(c6); // [ 'b', 'c', 'd' ]
console.log(d6); // [ 'b' ]

// array.sort(comparator)
const n = [4, 8, 15, 16, 23, 42];
n.sort();

console.log(n); // [ 15, 16, 23, 4, 42, 8 ]

n.sort(function(a, b) {
  return a - b;
})

console.log(n);

// 여러가지 타입 요소를 갖는 배열의 sort
const m = [ 'aa', 'bb', 'a', 4, 8, 15, 16, 23, 42, true, false];

m.sort(function(a, b) {
  if (a === b) {
    return 0;
  }
  if (typeof a === typeof b) {
    return a < b ? -1 : 1;
  }
  return typeof a < typeof b ? -1 : 1;
});

console.log(m);

// 객체 sort 예제
const by = function(name) {
  return function(o, p) {
    let a, b;
    if(typeof o === 'object' && typeof p === 'object' && o && p) {
      a = o[name];
      b = p[name];
      if (a === b) {
        return 0;
      }
      if (typeof a === typeof b) {
        return a < b ? -1 : 1;
      }
      return typeof a < typeof b ? -1 : 1;
    } else {
      throw {
        name: 'Error',
        message: `Expected an object when sorting by ${name}`,
      };
    }
  }
}

const s = [
  {first: 'EEE', last: 'eee'},
  {first: 'BBB', last: 'bbb'},
  {first: 'CCC', last: 'ccc'},
  {first: 'AAA', last: 'aaa'},
  {first: 'DDD', last: 'ddd'},
];

s.sort(by('first'));
console.log(s);


// array.splice(start, deleteCount, item...)
const a7 = ['a', 'b', 'c'];
const r7 = a7.splice(1, 1, 'ache', 'bug');

console.log(a7); // [ 'a', 'ache', 'bug', 'c' ]
console.log(r7); // [ 'b' ]

// array.unshift(item...)
// push와 반대로 배열의 앞쪽에 추가
const a8 = ['a', 'b', 'c'];
const r8 = a8.unshift('?', '@');

console.log(a8); // [ '?', '@', 'a', 'b', 'c' ]
console.log(r8); // 5

