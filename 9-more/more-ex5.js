// What does the following function do?

function doSomething(string) {
	return string.split(' ').reverse().map((value) => value.length);
}
// A. Returns an array of space-separated word from a string,
// reverses it, then coverts it to array of word lengths.
