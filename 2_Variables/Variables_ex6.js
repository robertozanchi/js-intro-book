// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
	const FOO = 'qux';
}

console.log(FOO);

/* A. it won't produce an error. The two constants are declared in different
scopes and are therefore separate.*/
