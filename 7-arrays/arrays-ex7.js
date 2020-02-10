// Use reduce to compute the sum of the squares of all of the numbers in an array:

let numbers = [ 3, 5, 7 ];

function sumOfSquares(arr) {
	return arr.reduce((accumulator, element) => accumulator + element * element, 0);
}

console.log(sumOfSquares(numbers)); // => 83
