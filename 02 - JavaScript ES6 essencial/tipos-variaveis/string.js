const textSize = 'Texto'.length;
console.log(`Quantidade de letras ${textSize}`);

const splittedText = 'Texto'.split('x');
console.log(`Array com as posições separadas pelo delimitador ${splittedText}`);

const replacedText = 'Texto'.replace('Text', 'text');
console.log(`Substutuição de valor ${replacedText}`);

const lastChar = 'Texto'.slice(-1);
console.log(`Última letra de uma string ${lastChar}`);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log(
  `Valor da string da primeira letra menos a última ${allWithoutLastChar}`
);

const secondToend = 'Texto'.slice(1);
console.log(`Valor da string da segunda letra até a última ${secondToend}`);

const twoCharBeforeFirstPos = 'Texto'.substr(0, 2);
console.log(`As duas primeiras letras são ${twoCharBeforeFirstPos}`);
