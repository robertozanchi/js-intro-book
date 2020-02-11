// Add a qux property with value 3 to the myObj object we created in the
// previous exercise.

let myProtoObj = {
	foo: 1,
	bar: 2
};

let myObj = Object.create(myProtoObj);

myObj['qux'] = 3;

// Now, examine the following code snippets. Without running this code,
// can you determine whether these two snippets produce the same output? Why?

Object.keys(myObj).forEach(function(key) {
	console.log(key);
});
// A. No, they don't. Object.keys returns only the object's own keys, i.e. 'qux'...

for (key in myObj) {
	console.log(key);
}

// ...While for/in is that it iterates over the properties of an object's prototypes as well.
