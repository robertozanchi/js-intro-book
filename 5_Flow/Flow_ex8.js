/* Write a function that logs whether a number is between 0 and 50 (inclusive),
 between 51 and 100 (inclusive), greater than 100, or less than 0. */

function fiftyPlus(number) {
	if (number < 0) {
		console.log('The number is smaller than 0');
	} else if (number <= 50) {
		console.log('The number is between 0 and 50 (inclusive)');
	} else if (number <= 100) {
		console.log('The number is between 51 and 100 (inclusive)');
	} else {
		console.log('The number is greater than 100');
	}
}
