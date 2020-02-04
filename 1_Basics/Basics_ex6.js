// Refactor console.log('5' + 10); to use explicit coercion, so it logs 15 instead.
console.log(parseInt('5') + 10);
let num = parseInt('5') + 10;
console.log(`The code has been refactored. ${num} is now of type ${typeof num}.`);
