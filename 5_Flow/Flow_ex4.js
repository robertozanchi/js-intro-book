// What does the following code log to the console, and why?

function barCodeScanner(serial) {
	switch (serial) {
		case '123':
			console.log('Product1');
		case '113':
			console.log('Product2');
		case '142':
			console.log('Product3');
		default:
			console.log('Product not found!');
	}
}

barCodeScanner('113');

// A. Last 3 console.log are logged because there is no break after case '113'.
