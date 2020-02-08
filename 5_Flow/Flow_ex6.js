// What does this code output to the console?

function isArrayEmpty(arr) {
	if (arr) {
		console.log('Not Empty');
	} else {
		console.log('Empty');
	}
}

isArrayEmpty([]); // [] is an empty Array

// A. The output to the console is 'Not Empty' since an empty array is truthy.
