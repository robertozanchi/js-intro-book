// let readlineSync = require('readline-sync');
// let firstName = readlineSync.question('What is your first name? ');
// let lastName = readlineSync.question('What is your last name? ');
// console.log(`Hello, ${firstName} ${lastName}!`);

//
function getText(text) {
	let readlineSync = require('readline-sync');
	let name = readlineSync.question(`${text} `);
	return name;
}

let firstName = getText('What is your first name?');
let lastName = getText('What is your last name?');
console.log(`Hello, ${firstName} ${lastName}!`);
