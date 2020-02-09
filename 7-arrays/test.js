// let array = [ 1, 2, 3 ];
// array.forEach(function(num) {
// 	console.log(num);
// 	return num + 1;
// });

let arr = [ 1, 2, 3, 4, 5 ];

arr.forEach((num, index) => {
	arr[index] = num * 2;
});

console.log(arr);
