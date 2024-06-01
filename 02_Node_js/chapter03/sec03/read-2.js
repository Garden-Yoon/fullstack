fs = require('fs');

// ./가 현재 플젝이 열린 폴더가 됨
// 기본 리턴값은 Buffer 객체이므로 인코딩을 해야 제대로 볼 수 있다
//인코딩 지정 : utf-8
const data = fs.readFileSync('./chapter03/sec03/example.txt', 'utf-8');
console.log(data);
