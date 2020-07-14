// throw 는 name, message 속성을 갖는 객체를 전달
const add = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers',
    };
  }
  return a + b;
}

const try_it = function() {
  try {
    add("seven");
  } catch(e) {
    console.log(`${e.name}: ${e.message}`);
  }
}

try_it();

