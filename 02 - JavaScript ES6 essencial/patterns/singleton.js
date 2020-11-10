function MyApp() {
  if (!MyApp.instance) {
    MyApp.instance = this;
  }
  return MyApp.instance;
}

const app = MyApp.call({ name: 'Teste' });
const app2 = MyApp.call({ name: 'Outro teste' });
console.log(app);
console.log(app2);

// console.log(MyApp);
// console.log(MyApp);
// console.log(MyApp);
