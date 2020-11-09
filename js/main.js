function load() {
  console.log('Página carregada');
}

function funcaoChange(elemento) {
  console.log(elemento.value);
}

function botao() {
  // console.log('Obrigado por clicar');
  const objeto = document.getElementById('agradecimento');
  objeto.textContent = 'Obrigado por clicar';
}

function redirecionar() {
  // window.open('http://www.google.com');
  window.location.href = 'http://www.google.com';
}

function trocar(elemento) {
  // const objeto = document.getElementById('mouseMove');
  elemento.textContent = 'Retire o mouse de cima';
}

function voltar(elemento) {
  // const objeto = document.getElementById('mouseMove');
  elemento.textContent = 'Passe o mouse aqui';
}

// function soma(n1, n2) {
//   return n1 + n2;
// }
// console.log(soma(5, 2));
// console.log(soma(5, 30));

// function validaIdade(idade) {
//   const validar = idade >= 18;
//   return validar;
// }

// console.log(validaIdade(prompt('Qual a sua idade?')));

// var nome = 'William Pereira';
// var n1 = 35;
// var n2 = 10;
// var frase = 'Japão é o melhor time do mundo';
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace('Japão', 'Brasil'));
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());

// var lista = ['maçã', 'pêra', 'laranja'];
// console.log(lista);
// lista.push('uva');
// console.log(lista);
// lista.pop();
// console.log(lista);
// console.log(lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(' - '));

// var fruta = { nome: 'maçã', cor: 'vermelha' };
// console.log(fruta.nome);

// var frutas = [
//   { nome: 'maçã', cor: 'vermelha' },
//   { nome: 'uva', cor: 'roxa' },
// ];
// console.log(frutas);

// var idade = 18;
// var idade = parseInt(prompt('Qual a sua idade?'), 10);
// if (idade >= 18) {
//   console.log('Maior de idade');
// } else {
//   console.log('Menor de idade');
// }

// var count = 0;
// while (count <= 5) {
//   console.log(count);
//   count++;
// }

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// var d = new Date();
// console.log(d.getMonth() + 1);
// console.log(d.getMinutes());

// console.log(`Hoje é ${d.getDate()} / ${d.getMonth() + 1}`);
// console.log('Hoje é ' + d.getDate() + '/' + (d.getMonth() + 1));

// alert('Digital Inovation One' + formacoes);

// var lista = ['Alemanha', 'Inglaterra', 'Escócia'];
// lista.push('Polônia');
// lista.pop('Inglaterra');
// console.log(lista);

// var a1 = 'testeA';
// var a2 = 'testeB';
// console.log(a1 + a2 + ' ' + '1425' + '-' + '1519');

// var lista = [(nome: 'rosa'), 'cravo', 'tulipa', 'margarida'];
// console.log(lista[2]);
