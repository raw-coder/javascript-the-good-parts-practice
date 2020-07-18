// 객체에 많은 파라미터를 전달하는 대신 이를 기술하는 객체를 받도록 정의한다!
const myObject = maker(f, l, m, c, s);

const myObject = maker({
  first: f,
  last: l,
  state, s,
  city: c,
});
