
const arr = [1,2,3];
const set = new Set([1,2,3]);
const map = new Map([['a',1],['b',2],['c',3]]);

console.log(arr[Symbol.iterator]);

for(const a of arr){
  console.log(a);
}
for(const a of set){
  console.log(a);
}
for(const a of map.keys()){
  console.log(a);
}


