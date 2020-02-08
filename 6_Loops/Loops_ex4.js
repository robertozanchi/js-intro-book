// Does the following code produce an error? Why or why not?
// What output does this code send to the console?

for (let i = 0; i < 5; ) {
	console.log((i += 1));
	//console.log(i);
}

// A. I would expect this code to run once and log 1 to console.
// A. I was wrong - it seems like i +=1 is assigned on line 2.
