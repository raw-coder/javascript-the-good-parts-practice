// Javascript의 숫자형은 64비트 부동소수점 형식 한가지만 있음
// 1 === 1.0

console.log(1 === 1.0); // true
console.log(100 === 1e2); // true


// NaN은 어떠한 숫자와도 다름
console.log(NaN === 100); // false
console.log(NaN === NaN); // false
console.log(isNaN(100)); // false

console.log(Infinity);
console.log(1.797e308);
console.log(1.798e308);
