function times(number1, number2) {
	let result = number1 * number2;
	console.log(result);
	return result;
}

let oneFact = times(1, 1);
let twoFact = times(2, oneFact);
let threeFact = times(3, twoFact);
let fourFact = times(4, threeFact);
let fiveFact = times(5, fourFact);
