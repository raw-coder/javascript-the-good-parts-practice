const empty_object = {};
const name = {
  'first-name': 'first',
  first_name: 'first!',
  'last-name': 'last',
  last_name: 'last!',
};

console.log(name);

const flight = {
  airline: 'OZ',
  number: 815,
  departure: {
    AAA: 'BBB',
    time: '2020-01-01 10:25',
    city: 'Seoul',
  },
  arrival: {
    AAA: 'CCC',
    time: '2020-01-02 12:00',
    city: 'Wonderland',
  },
};

console.log(flight);

console.log(name.first_name);
console.log(name['first-name']);
console.log(flight.departure.city);

// undefined when property not exist
console.log(name.middle_name);
console.log(flight.status);

// default value by using ||
console.log(name.middle_name || 'none');
console.log(flight.status || 'unknown');

// update or add properties
name['first-name'] = 'rename';
name['middle-name'] = 'middle';
name.nick_name = 'nick';
flight.equipment = {
  model: 'Boeing 7777',
};
flight.status = 'delayed';

// object copy
const copiedName = name;
copiedName.nick_name = 'kek?';

console.log(name.nick_name);
console.log(copiedName.nick_name);

// Object.create
if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    let F = function () {};
    F.prototype = 0;
    return new F();
  }
}

const another_name = Object.create(name);

another_name.nick_name = 'AAA';
another_name.middle_name = 'CCC';
another_name.first_name = 'FristMan';

console.log(another_name);
console.log(name);

name.test = 'test';

console.log(another_name);

// enumeration
let property;
for (property in another_name) {
  if (typeof another_name[property] !== 'function') {
    console.log(`${property}: ${another_name[property]}`);
  }
}

const properties = ['last-name', 'first-name'];
for (let i = 0; i < properties.length; i++) {
  console.log(`${properties[i]}: ${another_name[properties[i]]}`);
}