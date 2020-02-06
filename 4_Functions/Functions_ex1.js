/* What does this code log to the console? Does executing the foo function 
affect the output? Why or why not? */

let bar = 1;
function foo() {
	let bar = 2;
}

foo();
console.log(bar);

/* A. 1 is logged to the console. Calling foo() only declares bar as
a new local variable. The function does not return any value.*/
