//função comum
function log(value) {
  console.log(value);
}
log('função comum');

//função anônimo
var logFn = function (value) {
  console.log(value);
};
logFn('função anônimo');

//01 - arrow function
var logArrow01 = (value1, value2) => console.log(value1, value2);
logArrow01('arrow', 'function');

//02 - arrow function
//Parenteses omitidos por ter somente um parâmetro
//prettier-ignore
var logArrow02 = value => console.log(value);
logArrow02('arrow function');

//02 - arrow function
// ObjetoLiteral
var logArrow03 = (value) => ({ message: value });
console.log(logArrow03('arrow function'));

//Arrow function não pode ser usadas como class function
//Arrow function não permite hoisting

var obj = {
  showContext: function () {
    this.log('Teste');

    setTimeout(
      function () {
        this.log(this);
      }.bind(this),
      1000
    );
  },
  log: function log(value) {
    console.log(value);
  },
};
obj.showContext();

var obj2 = {
  showContext: function () {
    this.log('Teste');

    setTimeout(() => {
      this.log(this);
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  },
};
obj.showContext();
