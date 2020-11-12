//prettier--ignore
// function doFetch() {
//   fetch('./data.json')
//     .then((responseStream) => {
//       if (responseStream.status === 200) {
//         return responseStream.json();
//       } else {
//         throw new Error('Request error');
//       }
//     })
//     .then((dataJSON) => console.log(dataJSON))
//     .catch((error) => {
//       console.log('error', error);
//     });
// }

// doFetch();

//ES7 - Async / await
const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 1000);
  });

const simpleFunction = async () => {
  const data = await asyncTimer();
  console.log(data);
  const dataFile = await fetch('./data.json');
  const dataJson = await dataFile.json();
  return dataJson;
};

simpleFunction().then((data) => {
  console.log(data);
});
