(() => {
  const test = 'Valor função';
  console.log(`Valor dentro de função "${test}"`);

  if (true) {
    const test = 'valor if';
    console.log(`Valor dentro de if "${test}"`);
  }

  console.log(`Valor após a execução do if "${test}"`);
})();
