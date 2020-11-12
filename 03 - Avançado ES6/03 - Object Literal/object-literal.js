var obj1 = {
  prop: 'Digital One',
};
console.log(obj1);

var prop1 = 'Digital One';
var obj2 = { prop1 };
console.log(obj2);

function method() {
  console.log('Method called');
}
var obj3 = {
  method,
};
obj3.method();

var obj4 = {
  sum(a, b) {
    return a + b;
  },
};
console.log(obj4.sum(1, 5));
