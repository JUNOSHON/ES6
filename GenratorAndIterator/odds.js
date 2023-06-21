
function *infinity(i = 0){
  while (true) yield i++;
}
function *limit(l,iter) {
  for (const a of iter) {
    yield a;
    if (a == l) return;
  }
}
function* odds(limit) {
  for (const a of infinity(1)) {
    if (a % 2) yield a;
    if (a == limit) return;
  }
}


let iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
