'use strict'

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of


// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map

let fn_test_for_of_map = () => {
	let _map = new Map([['c', 2], ['d', 3], ['h', 1]])
	console.log(_map)
	for (let entry of _map) {
		console.log(entry, typeof entry);
	}
	for (let [k, v] of _map) {
		console.log("[%s, %s]", k, v)
	}
}


let fn_test_for_of_set = () => {
	let _set = new Set([1,1,2,2,3,3,3,4,5,5,7,1])
	console.log(_set)
	for (let v of _set)
		console.log(v, typeof v)
}

let fn_test_iterable_arg_function = () => {
	let fn = function() {
		for (let arg of arguments)
			console.log(arg)
	}
	fn.call(this, 1, 2, 3, 4, [23,45,54])
}

//fn_test_iterable_arg_function()


let test =  function () {
	// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/call
	(function () {
		for (let arg of arguments) 
			console.log(arg)	
	}).call(this, 1, 2, 3);

	// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
	(function () {
		for (let arg of arguments) 
			console.log(arg)	
	}).apply(this, [1, 2, 3]);
}



let test_iterables = function() {
	//console.log(Symbol)
	//console.log(Symbol.iterator)
	let typed_array = new Uint8Array([0x00, 0xff]);
	for(let value of typed_array) {
		console.log(value)
	}
}




test_iterables()






