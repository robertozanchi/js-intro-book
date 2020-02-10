// In this problem, we're again interested in even numbers

let myArray = [ [ 1, 3, 6, 11 ], [ 4, 2, 4 ], [ 9, 17, 16, 0 ] ];

myArray.forEach(function(el) {
	el.forEach(function(num) {
		if (num % 2 === 0) {
			console.log(num);
		}
	});
});
