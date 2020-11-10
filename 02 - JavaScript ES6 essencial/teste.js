// const arr1 = [2];
// const arr2 = Array.from(2);
// const arr3 = Array.of(2);
// const arr4 = Array(2);
// const arr5 = new Array(2);

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);

// const person = ['Cris'];

// person.push('James', 'Jenny');
// person.push('John');
// console.log(person);

// const frutas = ['melancia', 'laranja', 'acerola'];

// //no - frutas.shift();
// //ok - frutas.pop();
// //ok - frutas.splice(2, 1);
// //no -  frutas.slice(2, 1);
// frutas.unshift();

// console.log(frutas);

// const frutas = ['maracujá', 'melancia', 'abacaxi', 'caju'];
// // frutas.splice(2, 2, 'amora'); ok
// // frutas.splice('amora', 2, 2); não
// // frutas.pop(2, 'amora'); não
// // frutas.slice(2, 2, 'amora');
// console.log(frutas);

// const familiaPai = ['Avó Zeca', 'Avô Aroldo'];
// const familiaMae = ['Avô Carlos', 'Primo João Paulo'];

// const familiaFilho = familiaPai.concat(familiaMae);

// console.log(familiaPai);
// console.log(familiaMae);
// console.log(familiaFilho);

// const colaboradores = [
//   { nome: 'Cris', horasTrabalhadas: 220 },
//   { nome: 'Rebecca', horasTrabalhadas: 210 },
// ];

// function adicionaSalario(colaborador) {
//   const salario = colaborador.horasTrabalhadas * 50;
//   colaborador.salario = salario;

//   return {
//     salario,
//   };
// }

// const colaboradoresComSalario = colaboradores.map(adicionaSalario);

// console.log(colaboradoresComSalario);

// const frutas = ['amora', ['laranja', ['melancia'], 'acerola']];
// console.log(frutas.flat(2));

// const pessoas = ['Cris', 'Alexandre', 'Pablo', 'Cris'];

// console.log(pessoas.indexOf('Cris'));
// console.log(pessoas.findIndex((nome) => nome === 'Cris'));
// console.log(pessoas.lastIndexOf('Cris'));
// console.log(pessoas.find((nome) => nome === 'Cris'));

// const alunos = [
//   { nome: 'Cris', nota: 10 },
//   { nome: 'Alexendre', nota: 7 },
//   { nome: 'Pablo', nota: 4 },
// ];

// function alunoAprovado(aluno) {
//   return aluno.nota >= 7;
// }

// console.log(alunos.filter(alunoAprovado));
// console.log(alunos.some(alunoAprovado));
// console.log(alunos.every(alunoAprovado));

const frutas = ['amora', 'laranja', 'melancia', 'acerola'];

const sortedFrutas = frutas.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(sortedFrutas.reverse());
