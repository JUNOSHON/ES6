const log = console.log;

const apply1 = (f) => f(1); //함수가 함수를 받아서 실행함.즉, 고차함수
const add2 = (a) => a + 2;

console.log(apply1(add2)); //apply1 함수에 add2 함수를 받아서 실행
console.log(apply1((a) => a - 1)); //함수를 바로 쓸수도 있음

const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};
times(log, 3);
times((a) => log(a + 10), 3);
