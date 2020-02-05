let foo = 'bar';
{
	let foo = 'qux';
}

console.log(foo);

/* The program will print 'bar'. Because foo is reassigned within the object's
scope, itv is distict from the foo variable declared in the global scope. */
