// Create a function that creates and returns a copy of an object. The function
// takes two arguments: the object to copy and an array of the keys that you
// want to copy. You can omit the array of keys, in which case you should copy
// all the keys of the object.

function objCopy(obj, arr = []) {
	if (arr.length === 0) {
		arr = Object.keys(obj);
	}

	let newObj = {};
	arr.forEach((key) => {
		newObj[key] = obj[key];
	});

	return newObj;
}

let objToCopy = {
	foo: 1,
	bar: 2
};

let newObj = objCopy(objToCopy);
console.log(newObj.foo); // => 1
console.log(newObj.bar); // => 2

let newObj2 = objCopy(objToCopy, [ 'foo' ]);
console.log(newObj2.foo); // => 1
console.log(newObj2.bar); // => undefined
