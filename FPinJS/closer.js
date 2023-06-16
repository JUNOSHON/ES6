const log = console.log;
const addMaker = (a) => (b) => a + b;

const add10 = addMaker(10);
log(add10); //함수의 내용이 출력됨, b=>a+b;
