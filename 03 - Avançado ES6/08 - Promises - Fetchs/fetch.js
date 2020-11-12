//fetch

async function doFetch() {
  await fetch('/data.json').then((responseStream) => {
    console.log(responseStream);
  });
}

doFetch();
