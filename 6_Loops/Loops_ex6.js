// function factorial(number) {
// 	let result = 1;
// 	for (let counter = number; counter > 0; counter -= 1) {
// 		result *= counter;
// 	}

// 	return result;
// }

function factorial(number) {
	if (result <= 1) {
		return 1;
	}
	return number * factorial(number - 1);
}
