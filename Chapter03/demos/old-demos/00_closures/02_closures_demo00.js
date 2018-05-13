var myvar = "global";
function f() {
    console.log(myvar); // value at this point for myvar is "undefined"
    if (true) {
        var myvar = "local"; // value of myvar has changed to local
    }
    console.log(myvar); // value of myvar is local
}

f();