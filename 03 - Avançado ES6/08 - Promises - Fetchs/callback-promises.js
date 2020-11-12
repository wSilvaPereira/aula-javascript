//promisses
const doSomething = () =>
  new Promise((resolve, reject) => {
    // throw new Error('Error doSomeThing');
    try {
      setTimeout(() => {
        resolve('First data');
      }, 1500);
    } catch (err) {
      reject(err);
    }
  });

const doOuterThing = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve('Second data');
      }, 1000);
    } catch (error) {
      reject(err);
    }
  });

// Promise.all([doSomething(), doOuterThing()])
//   .then((data) => {
//     console.log(data[0].split(''), data[1].split(''));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.race([doSomething(), doOuterThing()])
  .then((data) => console.log(data.split('')))
  .catch((err) => {
    console.log(err);
  });

// doSomething()
//   .then((data) => {
//     console.log(data.split(''));
//     return doOuterThing().then((data) => console.log(data.split('')));
//   })
//   .catch((error) => {
//     console.log('Ops error', error);
//   });
