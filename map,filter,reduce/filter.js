const products = [
  {name: "손준호", price: 15000},
  {name: "안진표", price: 10000},
  {name: "유재영", price: 20000},
  {name: "윤진원", price: 25000},
  {name: "이동엽", price: 30000},
];

let under20000 = [];
for(const p of products){
  if(p.price<20000){under20000.push(p)};
}
console.log(...under20000);



let over20000= [];
for (const p of products){
  if(p.price>20000) over20000.push(p);
}
// console.log(...over20000);

const filter = (f,iter) =>{
  let res = [];
  for(const a of iter){
    if(f(a)) res.push(a);
  }
  return res;
}
console.log(...filter(p=>p.price<20000,products));
