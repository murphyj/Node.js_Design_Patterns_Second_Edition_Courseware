require('./promisify');

function a() {
  console.log("Invoking A");
}

function b() {
  console.log("Invoking B");
}

var promisifiedA = promisify(a);
var promisifiedB = promisify(a);

promisifiedB()
.then(promisifiedA())
.then(Promise.resolve());