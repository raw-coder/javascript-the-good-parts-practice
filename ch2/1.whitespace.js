// var와 that사이의 공백은 반드시 필요함
var that = this;

// 주석으로 // 형태만 사용할 것!
// /* */ 형태와 // 형태의 주석 모두 가능하나

// 아래 문장을 /* */ 로 주석처리하면
//정규표현식 때문에 주석 기호가 인식되지 않는 오류 발생함!!
var rm_a = /a*/.match(5);
