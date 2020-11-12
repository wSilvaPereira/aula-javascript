//Sem default
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 5));

//Sem default - com tratamento
function multiplyDefault(a, b) {
  b = typeof b === 'undefined' ? 1 : b;
  return a * b;
}
console.log(multiplyDefault(2));

//Com default
function multiplyDefault(a, b = 1) {
  return a * b;
}
console.log(multiplyDefault(2, 10));

function randomNumber() {
  return parseInt(Math.random() * 10);
}
//lazy evaluation
function multiplyLazy(a, b = randomNumber()) {
  return a * b;
}

console.log(multiplyLazy(10));
