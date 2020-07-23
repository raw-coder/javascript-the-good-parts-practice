// object.hasOwnProperty(name)
// - 객체가 name과 같은 이름의 속성이 있으면 true 아니면 false
// - 해당 이름이 prototype chain상에 존재하는지 확인하지는 않음
const a = {member : true};
const b = Object.create(a);

console.log(a.hasOwnProperty('member')); // true
console.log(b.hasOwnProperty('member')); // false
console.log(b.member); // true
