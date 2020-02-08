/* Write a function that computes and returns the factorial (see exercise 4 in
the Functions chapter) of a number by using a for loop. You may assume that the
argument is a valid non-negative integer. */

// function times(number1, number2) {
// 	let result = number1 * number2;
// 	console.log(result);
// 	return result;
// }

function factorial(number) {
	let result = 1;
	for (let counter = number; counter > 0; counter -= 1) {
		result *= counter;
	}
	return result;
}
