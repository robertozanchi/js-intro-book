function multiply(a, b) {
	return a * b;
}

function getNum(text) {
	let readlineSync = require('readline-sync');
	return parseFloat(readlineSync.question(`${text} `));
}

let a = getNum('Enter the first number: ');
let b = getNum('Enter the second number: ');
console.log(`${a} * ${b} = ${multiply(a, b)}`);
