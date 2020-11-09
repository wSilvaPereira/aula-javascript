var test = 'example';

(() => {
  console.log(`Valor dentro de função "${test}"`);

  if (true) {
    var test = 'example';
    console.log(`Valor dentro de if "${test}"`);
  }

  console.log(`Valor após a execução do if "${test}"`);
})();
