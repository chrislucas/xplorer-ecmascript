// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable

/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
*/

'use strict';


let fun_sample_1 = () => {
	let gen = ( function *() {
		for (let i=0; i<100; i++)
			yield i
	})();
	console.log(gen)
	for (let g of gen) {
		if(g > 30)
			break;
	}
	// Um generator nao deve ser usado depois do loop
	// mesmo que o loop tenha sido interrompido usando a keyword 'break'
	//for (let g of gen)
		//console.log(g)
}

//fun_sample_1()


// a sintaxe function * () define um generator

function * fn(n) {
	if(n < 2)
		yield 1;
	else {
		let last;
		// fn(n) retorna um generator, assim podemos iterar sobre ele
		// recuperar o ultimo valor do generator e multiplicar por n
		for (last of fn(n-1))
			yield last
		yield n * last
	}
}

function testFnGenerator() {
	let generator = fn(6)
	console.log(Array.from(generator))
}

/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
*/
function testGeneratorConstructorProperties() {
	let fn = function * () {};
	console.log(fn);
	let props = Object.getPrototypeOf(fn);
	console.log("Props: %o\nConstructor: %o", props, props['constructor'])
}

//testGeneratorConstructorProperties();


function testAnonymousGenerator() {
	let anon = function * (v) {
		let p = 0;
		let q = 1;
		for(let i=0; i<v; i++) {
			p += q;
			q = p - q;
			yield p;
		}
	};
	let it = anon(10);
	console.log(it.next());
	console.log(it.next());
	console.log(it.next());

}


testAnonymousGenerator();





