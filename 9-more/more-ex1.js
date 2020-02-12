//What does this code log to the console? Why?

let array1 = [ 1, 2, 3 ];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// A. Logs [1, 4, 3]. array1 and array2 point to the same array. Line 5 changes the
// array by operating on array1. WHen array2 is logged, the updated array is printed.
