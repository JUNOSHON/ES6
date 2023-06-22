const products = [
  {name: "손준호", price: 15000},
  {name: "유재영", price: 20000},
  {name: "윤진원", price: 25000},
  {name: "이동엽", price: 30000},
];

// const map = (f, iter) => {
//   let res = [];
//   for (const a of products) {
//     res.push(f(a));
//   }
//   return res;
// };


function *gen() {
  yield 2;
  yield 3;
  yield 4;
}

let m = new Map();
m.set('a,',10);
m.set('b,',20);
const it = m[Symbol.iterator]();
m[Symbol.iterator]();


console.log(map(([k,a]) => [k,a*2],m));

// let names = {
// [];d
// for(const p of products) {
//   names.push(p.name);
// }
// console.log(names);
//
// let prices = [];
// for(const p of products) {
//   prices.push(p.price);
// }
// console.log(prices);


