const myObject = function() {
  let value = 0;
  
  return {
    increment: function(inc) {
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function() {
      return value;
    }
  }
}

// myQuo.get_status() 는 quo 리턴이후에도 접근 가능 ==> closure

const quo = function(status) {
  return {
    get_status: function() {
      return status;
    }
  }
}

const myQuo = quo('amaze');

console.log(myQuo.get_status());

// fade 함수 실행하면 step 함수를 한번 실행하고 종료
// step 함수 실행되면서 내부적으로 fade함수의 level접근 가능하며 스스로 반복하여 재귀호출
const fade = function(node) {
  let level = 1;
  let step = function() {
    let hex = level.toString(16);
    node.style.backgroundColor = '#ffff' + hex + hex;
    if (level < 15) {
      level += 1;
      setTimeout(step, 100);
    }
  }
  setTimeout(step, 100);
};

fade(document.body);

// wrong example
// => node에 정의된 변수 i 가 연결됨
const wrong_add_the_handlers = function(nodes) {
  let i;
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = function(e) {
      console.log(i);
    }
  }
}

// => 넘겨받은 i 의 값을 연결함
const add_handler = function(nodes) {
  let i;
  for (i = 0; i < nodes.length; i += 1) {
    nodes[i].onclick = function(e) {
      return function(e) {
        console.log(i);
      }
    }
  }
}
