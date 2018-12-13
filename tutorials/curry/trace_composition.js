let trace = label => value => {
	console.log("Label: %s, Value: %d", label, value)
	return value;
}

let f = a => a + 1
let g = a => a * 2

let composite = x => {
	var gOfx = g(x);
	trace('g of x')(gOfx);
	var fOfgOfx = f(gOfx);
	trace('f of g of x')(fOfgOfx);
	return fOfgOfx;
}

console.log(composite(20));

//  https://medium.com/javascript-scene/composing-software-an-introduction-27b72500d6ea

// a funcao reducer recebe um valor x e uma funcao f como argumentos
let reducer = (x, f) => f(x)
// reduce(function(acc,), initValue)
// funcao pipe recebe uma lista de argumentos do tipo funcao
let pipe = (...args) => x => args.reduce(reducer, x)

console.log(pipe(g, f, g, f)(20))