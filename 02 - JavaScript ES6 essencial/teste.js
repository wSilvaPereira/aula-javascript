// const name = 'Foo';
// const lastName = String('Bar');

// console.log(name.constructor === lastName.constructor);
// console.log(name.prototype === String.prototype);
// console.log(lastName.__proto__ === String.prototype);
// console.log(name.__proto__.split === lastName.__proto__.split);

// function Pessoa(nome) {
//   this.nome = nome;
// }

// function PessoaFisica(nome, cpf) {
//   Pessoa.call(this, nome);
//   this.cpf = cpf;
// }

// function PessoaJuridica(nome, cnpj) {
//   Pessoa(nome);
//   this.cnpj = cnpj;
// }

// const pessoaFisica = new PessoaFisica('Foo', '123.456.670-0');
// const pessoaJuridica = new PessoaJuridica('Bar', '12.345.678/9012-34');

// console.log(pessoaFisica);
// console.log(pessoaJuridica);

// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;

//   return {
//     nome,
//     idade: 20,
//     falar() {
//       console.log('Objeto falar');
//     },
//   };
// }

// Pessoa.prototype.falar = function () {
//   console.log('Prototype Falar');
// };

// const pessoa = new Pessoa('Foo', 30);
// console.log('01', pessoa);
// console.log('02', pessoa.constructor === Pessoa);
// console.log('03', pessoa.constructor === Object);
// console.log('04', pessoa.__proto__.falar === undefined);
// console.log('05', pessoa.falar());

// function Conta() {
//   Conta.prototype.rendimento = 0;
//   Conta.prototype.depositar = function () {};
//   Conta.prototype.retirar = function () {};
//   Conta.prototype.exibirSaldo = function () {
//     return `O Saldo da conta é ${this.saldo}.`;
//   };
// }

// function ContaPoupanca() {
//   this.exibirSaldo = function () {
//     return 'Operacao não disponível';
//   };
// }

// ContaPoupanca.prototype.rendimento = 0.03;
// ContaPoupanca.prototype = Object.create(Conta.prototype);

// const contaPoupanca = new ContaPoupanca();
// console.log('01-', contaPoupanca instanceof ContaPoupanca);
// console.log('02-', contaPoupanca);
// console.log('03-', contaPoupanca.exibirSaldo());
// console.log('04-', contaPoupanca.rendimento);
// console.log('05-', contaPoupanca.__proto__.exibirSaldo());

// class Pessoa {
//   #nome = '';
//   constructor(nome) {
//     this.#nome = nome;
//   }
//   get nome() {
//     return `seu nome é ${this.#nome}`;
//   }

//   set nome(novoNome) {
//     this.#nome = novoNome;
//   }
// }

// const pessoa = new Pessoa();

// console.log(pessoa);
// console.log(pessoa.nome);
// pessoa.nome = 'Foo';
// console.log(pessoa.nome);

// class ID {
//   static #contador = 0;

//   static get contador() {
//     return this.#contador;
//   }

//   static incrementaContador() {
//     return ++this.#contador;
//   }
// }

// class Cliente {
//   #id = 0;
//   constructor() {
//     this.#id = ID.incrementaContador();
//   }

//   get id() {
//     return this.#id;
//   }
// }

// const c1 = new Cliente();
// console.log(`Contador atual ${ID.contador}`);

// const c2 = new Cliente();
// const c3 = new Cliente();

// console.log(`Contador atual ${ID.contador}`);
// console.log(c1);
