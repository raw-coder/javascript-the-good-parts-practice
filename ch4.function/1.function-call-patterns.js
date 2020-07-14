const add = function(a, b) {
  return a + b;
}

// 함수 호출 패턴 4가지 : 매개변수 this를 각각 다르게 초기화

// 1. 메소드 호출 패턴
// - this를 생 시점에 초기화

const myObject = {
  value: 0,
  increment: function (inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  },
}

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

// 2. 함수 호출 패턴
// - this 를 전역객체에 바인딩
// - 함수성 내에서 this 를 다른 변수에 할당하여 문제 회피 가능

let sum = add(3, 4);
console.log(sum);

myObject.double = function () {
  const that = this;
  
  const helper = function() {
    that.value = add(that.value, that.value);
  }
  
  helper();
}

myObject.double();
console.log(myObject.value);

// 3. 생성자 호출 패턴
// - new 연산자와 함께 호출하면 함수의 prototype 속성의 값에 연결되는 객체가 생성되고 this에 바인딩

const Quo = function (string) {
  this.status = string;
}

Quo.prototype.get_status = function() {
  return this.status;
}

const myQuo = new Quo('confused');
console.log(myQuo.get_status());


// 4. apply 호출 패턴
// apply 의 첫번째 인자가 this에 바인딩, 두번째 인자는 매개변수 배열

const array = [3, 4];
sum = add.apply(null, array);
console.log(sum);

const statusObject = {
  status: 'OK',
};

const status = Quo.prototype.get_status.apply(statusObject);

console.log(status);
