/* Refactor the code so that you don't need to call randomNumberBetween from 
two different locations, lines 6 and 10. Do not change the arguments you pass
to randomNumberBetween. */

function randomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
//let result = randomNumberBetween(1, 6);
//let result = 0;
let result;
//tries += 1;

// the while loop below will not run even once if I simply declare 'result' without
// assigment because 'result' is undefined and 'result <= 2' evaluates to false.
// while (result <= 2) {
// 	result = randomNumberBetween(1, 6);
// 	tries += 1;
// }

// the do-while loop always runs at least once, so it's ok to declare 'result' without assigment above
do {
	result = randomNumberBetween(1, 6);
	tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
