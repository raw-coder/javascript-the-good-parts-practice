// 연속호출 : cascade
// this를 리턴하는 함수를 정의하여 연속 호출이 가능함
function number(value){
  return {
    plus: function(sum) {
      value += sum;
      return this;
    },
    minus: function(min) {
      value -= min;
      return this;
    },
    getValue: function() {
      return value;
    }
  }
}

console.log(number(5).plus(1).minus(2).getValue());
