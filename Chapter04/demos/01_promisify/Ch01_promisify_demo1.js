const Promisify = require('./promisify');

function a() {
  console.log("Invoking A");
}

function b() {
  console.log("Invoking B");
}

var promisifiedA = Promisify.promisify(a);
var promisifiedB = Promisify.promisify(b);

promisifiedB();
promisifiedA();