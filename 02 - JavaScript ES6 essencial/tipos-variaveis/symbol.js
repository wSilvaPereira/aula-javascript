const symbol1 = Symbol();
const symbol2 = Symbol();

console.log('symbol1 é igual a symbol2', symbol1 === symbol2);

const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'William',
  [nameSymbol2]: 'Outro nome',
  lastName: 'Pereira',
};

console.log(user);

for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`Valor da chave ${key}: ${user[key]}`);
  }
}

console.log('Propriedades do object user', Object.keys(user));
console.log('Propriedades do object user', Object.values(user));

console.log(
  'Symbols registrados no object user',
  Object.getOwnPropertySymbols(user)
);

console.log('Todas propriedades do objeto user', Reflect.ownKeys(user));

const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT'),
};
