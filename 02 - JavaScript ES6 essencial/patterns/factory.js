// function fakeUser() {
//   return {
//     name: 'William',
//     lastName: 'Pereira',
//   };
// }

// const user = fakeUser();
// console.log(user);

// function fakeUser(name) {
//   return {
//     name,
//     lastName: 'Pereira',
//   };
// }

// const user = fakeUser('outro nome');
// console.log(user);

function fakeUser(customProperties) {
  return {
    name: 'William',
    lastName: 'Pereira',
    ...customProperties,
  };
}

const user = fakeUser({ name: 'Outro nome', age: 35 });
console.log(user);
