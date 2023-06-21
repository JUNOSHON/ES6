function* gen() {
  yield 1;
  if (false) yield 2;
  yield 3;
  return 100;
}

let iter = gen();

// console.log(iter[Symbol.iterator]() == iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
for (const a of gen()) {
  console.log(a);
}
