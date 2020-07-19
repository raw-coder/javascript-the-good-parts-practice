// Javascript 의 배열은 초기화함수가 없음
// 아래와 같이 직접 구현해야함
Array.dim = function(dimension, initial) {
  let a = [], i;
  for (i = 0; i < dimension; i += 1) {
    a[i] = initial;
  }
  return a;
}

const myArray = Array.dim(10, 0);

console.log(myArray);

// 2차원 배열
const matrix = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
console.log(matrix[2][1]);

// 2차원 배열 초기화 함수
Array.matrix = function(m, n, initial) {
  let a, i, j, mat = [];
  for (i = 0; i < m; i += 1) {
    a = [];
    for (j = 0; j < n; j += 1) {
      a[j] = initial;
    }
    mat[i] = a;
  }
  return mat;
}

const myMatrix = Array.matrix(4, 3, 0);

console.log(myMatrix);

// n x n 단위 행렬 함수
Array.identity = function(n) {
  let i, mat = Array.matrix(n, n, 0);
  for (i = 0; i < n; i += 1) {
    mat[i][i] = 1;
  }
  return mat;
}

const myIdentity = Array.identity(4);

console.log(myIdentity);
