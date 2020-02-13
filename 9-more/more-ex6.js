// Write a function that searches an array of strings for every element that
// matches the regular expression given by its argument. The function should
// return all matching elements in an array.

let words = [ 'laboratory', 'experiment', 'flab', 'Pans Labyrinth', 'elaborate', 'polar bear' ];

function allMatches(words, expression) {
	let matches = [];
	words.forEach((element) => {
		if (expression.test(element)) {
			matches.push(element);
		}
	});
	return matches;
	console.log(matches);
}

// function allMatches(words, pattern) {
// 	let matches = [];
// 	for (let index = 0; index < words.length; index += 1) {
// 		if (pattern.test(words[index])) {
// 			matches.push(words[index]);
// 		}
// 	}

// 	return matches;
// }

// function allMatches(words, pattern) {
// 	return words.filter((word) => pattern.test(word));
// }

allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']
