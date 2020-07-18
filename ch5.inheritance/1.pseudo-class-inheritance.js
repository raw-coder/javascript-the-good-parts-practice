// Pseudo class 를 활용한 상속 예제
// - new 누락하면 안됨. this가 새로운 객체 바인딩 되지 않으며 전역의 this 참조됨.
// - 생성자 함수를 파스칼 표기법으로 명명하는 방법이 있으나, 강제할 수 없음
// - 좋은 방법은 아니다!

const Mammal = function(name) {
  this.name = name;
}

Mammal.prototype.get_name = function() {
  return this.name;
}

Mammal.prototype.says = function() {
  return this.saying || '';
}

const myMammal = new Mammal('Herb');
console.log(myMammal.get_name());


const Cat = function(name) {
  this.name = name;
  this.saying = 'meow';
};

Cat.prototype = new Mammal();

Cat.prototype.purr = function(n) {
  let i, s = '';
  for(i = 0; i < n; i += 1) {
    if (s) s += '-';
    s += 'r';
  }
  return s;
}

Cat.prototype.get_name = function() {
  return `${this.says()} ${this.name} ${this.says()}`;
};

const myCat = new Cat('Henrietta');
console.log(myCat.says());
console.log(myCat.purr(5));
console.log(myCat.get_name());
