const lista = [1, 2, 3, 4, 5];

lista.forEach((value, index, arr) => {
  console.log(index, value, arr);
});

const novaLista = lista.map((item, index) => {
  return `${index} - ${item}`;
});
console.log(novaLista);

const listaNivel = [1, 2, [3, 4, [5, 6]]];
const flatLista = listaNivel.flat(2);
console.log(flatLista);

const arr = [1, 2, 3, 4];
const flat1 = arr.flatMap((value) => [value * 2]);
const flat2 = arr.flatMap((value) => [[value * 2]]);
console.log(flat1);
console.log(flat2);

const arrIteratorKeys = arr.keys();
while (arrIteratorKeys.done) {
  console.log(arrIteratorKeys.next());
}

const arrIteratorValues = arr.values();
while (arrIteratorValues.done) {
  console.log(arrIteratorValues.next());
}

const arrIteratorEntries = arr.entries();
while (arrIteratorEntries.done) {
  console.log(arrIteratorEntries.next());
}

const arrFind = [1, 2, 3, 4];
const primeiro = arrFind.find((item) => item > 2);
console.log(primeiro);

const arrFindIndex = [1, 2, 3, 4];
const primeiroIndex = arrFindIndex.find((item) => item > 2);
console.log(primeiro);

const arrFilter = [1, 2, 3, 4];
const filterdArr = arrFilter.filter((item) => item > 2);
console.log(filterdArr);

const arrIndexOf = [1, 2, 3, 3, 4];
const indexedArr = arrIndexOf.indexOf(3);
console.log(indexedArr);

const arrLastIndexOf = [1, 2, 3, 3, 4];
const lastIndexedArr = arrLastIndexOf.lastIndexOf(3);
console.log(lastIndexedArr);

const arrIncludes = [1, 2, 3, 3, 4];
console.log(arrIncludes.includes(1));
console.log(arrIncludes.includes(5));

const arrSome = [1, 2, 3, 3, 4];
const hasSomeNumber = arrSome.some((item) => item % 2 === 0);
console.log(hasSomeNumber);

const arrEvery = [1, 2, 3, 3, 4];
const hasEveryNumber = arrEvery.every((item) => item >= 1);
console.log(hasEveryNumber);

const arrSort = [1, 2, 3, 3, 4, 10, 6, 9, 8];
const sorted = arrSort.sort((a, b) => a - b);
console.log(sorted);

const arrReverse = [1, 2, 3, 3, 4, 10, 6, 9, 8];
const reversed = arrReverse.reverse();
const joined = arrReverse.join(' ');
console.log(reversed);
console.log(joined);

const arrReduce = [1, 2, 3, 3, 4, 10, 6, 9, 8];
const reduced = arrReduce.reduce((total, value) => {
  return (total += value);
}, 0);
console.log(reduced);
