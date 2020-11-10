var arvores = new Array(
  'Pau-Brasil',
  'Loureiro',
  'Cedro',
  'Carvalho',
  'sicômoro'
);
console.log(0 in arvores);
console.log(3 in arvores);
console.log(6 in arvores);
console.log('Cedro' in arvores);
console.log('length' in arvores);

console.log('PI' in Math);

var minhaString = new String('Coral');
console.log('length' in minhaString);

var meuCarro = { marca: 'Honda', modelo: 'Accord', ano: 1998 };
console.log('marca' in meuCarro);
console.log('modelo' in meuCarro);
