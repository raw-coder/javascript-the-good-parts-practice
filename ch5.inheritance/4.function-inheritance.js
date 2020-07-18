// function을 통한 상속을 통해 private 속성 구현 가능
const constructor = function (spec, my) {
  let that;
  // private variables and functions;
  let private_var;
  const private_function = function() {
    // ...
  }
  
  // new object
  that = {
    // ...
  };
  
  that.public_var = 'hello';
  that.public_method = function () {
    // ...
  };
  return that;
}


// Mammal example
const mammal = function (spec) {
  let that = {};
  
  that.get_name = function () {
    return spec.name;
  }
  that.says = function () {
    return spec.saying || '';
  }
  return that;
}
const myMammal = mammal({name: 'Herb'});

const cat = function (spec) {
  spec.saying = spec.saying || 'meow';
  let that = mammal(spec);
  that.purr = function (n) {
    let i, s = '';
    for (i = 0; i < n; i += 1) {
      if (s) {
        s += '-';
      }
      s += 'r';
    }
    return s;
  }
  that.get_name = function() {
    return `${that.says()}  ${spec.name} ${that.says()}`;
  }
  return that;
};

const myCat = cat({name: 'Henrietaa'});

console.log(myCat.purr(10));
console.log(myCat.get_name());

Object.method('superior', function(name) {
  let that = this;
  let method = that[name];
  return function () {
    return method.apply(that, arguments);
  }
})
