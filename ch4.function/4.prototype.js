// prototype 에 의한 상속을 사용한 method 추가
// - 해당이름의 method가 없는 경우만 추가
Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};
Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10 / 3).integer());

String.method('trim', function() {
  return this.replace(/^\s+|\s+$/g, '');
});

console.log('"' + '   Hello World!  '.trim() + '"');
