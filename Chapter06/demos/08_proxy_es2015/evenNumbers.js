const eventNumbers = new Proxy([], {
   get: (target, index) => index * 2,
   has: (target, number) => number % 2 === 0
});

console.log(2 in eventNumbers); // true
console.log(5 in eventNumbers); // false
console.log(eventNumbers[7]);   // 14