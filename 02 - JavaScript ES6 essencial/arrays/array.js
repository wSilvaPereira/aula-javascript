const persons = Array.of('John', 'Cris', 'Jenny');
console.log(persons);

const arrayWith3Positions = Array(3);
console.log(arrayWith3Positions);

const positivos = Array(3, 2);
console.log(positivos);

console.log(positivos.push(5));
console.log(positivos);

console.log(positivos.pop());
console.log(positivos);

console.log(positivos.unshift(10));
console.log(positivos);

console.log(positivos.shift(10));
console.log(positivos);

const negativos = [-1, -5, -9];
const number = positivos.concat(negativos);
console.log(number);

const sliced1 = number.slice(0, 3);
console.log(sliced1);

const sliced2 = number.slice(2);
console.log(sliced2);

const sliced3 = number.slice(-1);
console.log(sliced3);

number.splice(2);
console.log(number);

number.splice(1, 0, 100, 200);
console.log(number);

number.splice(0, 1, 400, 500);
console.log(number);
