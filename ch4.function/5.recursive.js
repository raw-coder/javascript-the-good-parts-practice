// 하노이 탑 예제
const hanoi = function(disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    console.log(`Move disc ${disc} from ${src} to ${dst}`);
    hanoi(disc -1, aux, src, dst);
  }
};

hanoi(3, 'Src', 'Aux', 'Dst');

// Dom tree 탐색 예제
const walk_the_DOM = function walk(node, func) {
  func(node);
  node = node.firstChild;
  while(node) {
    walk(node, func);
    node = node.nextSibling;
  }
};

const getElementsByAttribute = function(att, value) {
  let results = [];
  
  walk_the_DOM(document.body, function(node) {
    let actual = node.nodeType === 1 && node.getAttribute(att);
    if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
      results.push(node);
    }
  });
  
  return results;
}

// javascript 에서는 꼬리재귀(tail recursion) 최적화를 제공하지 않음
// 꼬리재귀 : 재귀의 호출이 끝난 후 현재 함수에서 추가 연산을 요구하지 않도록 구현하는 재귀 방법
const factorial = function factorial(i, a) {
  a = a || 1;
  if (i < 2) {
    return a;
  }
  return factorial(i - 1, a * i);
};

console.log(factorial(5));
