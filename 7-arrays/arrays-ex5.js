// Use the filter method to implement a function that returns a new array with
// all of the integers from the input array. It should ignore all non-integer
// values from the input.

function removeNonInteger(array) {
	return array.filter((el) => Number.isInteger(el));
}

let array = [ 1, 'a', '1', 3, NaN, 3.1415, -4, null, false ];
let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]
