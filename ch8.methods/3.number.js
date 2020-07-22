// number.toExponential(fractionDigits)
// - 숫자를 지수형으로 표현
// - fractionDigits : 표시할 자리수
console.log(Math.PI.toExponential(0));
console.log(Math.PI.toExponential(2));
console.log(Math.PI.toExponential(7));
console.log(Math.PI.toExponential(16));
console.log(Math.PI.toExponential());

// number.toFixed(fractionDigits)
// - 숫자를 고정 소수점 형태로 변환
// - fractionDigits : 표시할 자리수
console.log(Math.PI.toFixed(0));
console.log(Math.PI.toFixed(2));
console.log(Math.PI.toFixed(7));
console.log(Math.PI.toFixed(16));
console.log(Math.PI.toFixed());

// number.toPrecision(precision)
// - 숫자를 10진수 형태의 문자열로 리턴
// - precision : 문자열에 포함된 숫자 자리수
console.log(Math.PI.toPrecision(2));
console.log(Math.PI.toPrecision(7));
console.log(Math.PI.toPrecision(16));
console.log(Math.PI.toPrecision());

// number.toString(radix)
// - 숫자를 문자열로 변환
// - radix : 기수(진법) 2~36사이 숫자
console.log(Math.PI.toString(2));
console.log(Math.PI.toString(8));
console.log(Math.PI.toString(16));
console.log(Math.PI.toString());
