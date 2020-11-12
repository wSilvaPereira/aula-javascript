const arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
//Modo antigo
const apple = arr[0];
const banana = arr[1];
const orange = arr[2];
const tomato = arr[3][0];
//ES6
var [apple2, banana2, orange2, [tomato2]] = arr;
console.log(tomato, tomato2);

//Com objeto
var obj = {
  name: 'William',
};
var { name: name2 } = obj;
console.log(name2);

//Nested
var obj2 = {
  name: 'Ana Paula',
  props: {
    age: 36,
    favoriteColors: ['black', 'blue'],
  },
};
const { age } = obj2.props;
//prettier-ignore
const {props: { age: age2 }} = obj2;
//prettier-ignore
const {props: {favoriteColors: [color1, color2]}} = obj2;
console.log(age, age2, color1, color2);

//Objetos
var arrObj = [{ name: 'Apple', type: 'fruit' }];
var [{ name: nameObj }] = arrObj;
console.log(nameObj);

//function
function sum([a, b]) {
  return a + b;
}
console.log(sum([1, 2]));

function sumDefault([a, b] = [0, 0]) {
  return a + b;
}
console.log(sumDefault());
