// Create an array from the keys of object obj below, with all values converted
// to uppercase. Your implementation must not mutate obj.

let obj = {
	b: 2,
	a: 1,
	c: 3
};

let arr = Object.keys(obj);
// To use map(), you need to re-assign because map does not change array.
arr = arr.map((key) => key.toUpperCase());

// // Alternatively, use forEach:
// arr.forEach((el, index) => {
// 	arr[index] = el.toLocaleUpperCase();
// });

console.log(arr);
