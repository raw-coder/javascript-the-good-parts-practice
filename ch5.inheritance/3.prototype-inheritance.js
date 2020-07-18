// 프로토타입에 의한 상속
const myMammal = {
  name: 'herb',
  get_name: function() {
    return this.name;
  },
  says: function() {
    return this.saying || '';
  },
}

const myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
  let i, s = '';
  for (i = 0; i< n; i += 1) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
}
myCat.get_name = function () {
  return `${this.says()} ${this.name} ${this.says()}`;
}

console.log(myCat.name);
console.log(myCat.saying);
console.log(myCat.purr(100));
console.log(myCat.get_name());
