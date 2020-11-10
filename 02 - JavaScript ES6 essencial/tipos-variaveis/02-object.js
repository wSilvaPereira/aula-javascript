// let user = {
//   name: 'William',
//   lastName: 'da Silva Pereira',
// };

// console.log('Propriedades do objeto user', Object.keys(user));
// console.log('Valores das propriedades do objeto user', Object.values(user));
// console.log('Lista de propriedades e valores', Object.entries(user));

// Object.assign(user, { fullname: 'William da Silva Pereira' });
// console.log('Adiciona a propriedade fullName no objeto user', user);
// console.log(
//   'Retorna um novo objeto mergeando dois ou mais objetos',
//   Object.assign({}, user, { age: 35 })
// );

// const newObj = { foo: 'bar' };
// Object.freeze(newObj);

// newObj.foo = 'changes';
// delete newObj.foo;
// newObj.bar = 'foo';
// console.log(newObj);

const person = { name: 'William' };
Object.seal(person);

person.name = 'William Pereira';
delete person.name;
person.age = 26;

console.log(person);
