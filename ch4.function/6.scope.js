const foo = function() {
  let a = 3, b = 5;
  let bar = function() {
    let b = 7, c = 11;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
    a += b + c;
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
  };
  bar();
  console.log(`a: ${a}, b: ${b}`);
}

foo();
