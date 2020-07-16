Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
};

String.method('deentityify', function() {
  const entity = {
    quot: '"',
    lt: '<',
    qt: '>',
  };
  
  return function() {
    return this.replace(/&([^&;]+);/g,
      function (a, b) {
        let r = entity[b];
        return typeof r === 'status' ? r : a;
      });
  }
}());

console.log('&lt;&quot;&gt;'.deentityify());


// 시리얼 번호 생성 예제
// private 변수와 함수정의하는 함수
const serial_maker = function () {
  let prefix = '';
  let seq = 0;
  return {
    set_prefix: function(p) {
      prefix = String(p);
    },
    set_seq: function(s) {
      seq = s;
    },
    gensym: function() {
      let result = prefix + seq;
      seq += 1;
      return result;
    },
  };
};

const mySerialMaker = serial_maker();
mySerialMaker.set_prefix('Q');
mySerialMaker.set_seq(100);
console.log(mySerialMaker.gensym());
