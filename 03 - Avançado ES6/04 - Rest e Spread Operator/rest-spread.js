//Rest operator
function sum(...values) {
  return values.reduce((accumulate, current) => (accumulate += current), 0);
}
console.log(sum(5, 5, 1, 3, 4));

const sum2 = (a, b, ...rest) => {
  console.log(a, b, rest);
};
sum2(5, 5, 1, 3, 4);

//Spread operator
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum3 = (...rest) => {
  // método antigo
  // return multiply.apply(undefined, rest);

  //Com spread
  return multiply(...rest);
};
console.log(sum3(5, 5, 1, 3, 4));

//Spread com string
const str = 'Digital Innovation One';
function logArgs(...args) {
  console.log(args);
}
logArgs(...str);

//Spread com arrays
const arr = [1, 2, 3, 4];
logArgs(...arr);

//Spread construir array
const arr2 = [5, 6, 7, 8];
const arr3 = [...arr, ...arr2];
console.log(arr3);

//Spread Objetos literais
const objLit = {
  test: 123,
};
const objLit2 = {
  ...objLit,
  test2: 'hello',
};
console.log(objLit2);
