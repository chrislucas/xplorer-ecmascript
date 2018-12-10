/*
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax

 https://stackoverflow.com/questions/1959040/is-it-possible-to-send-a-variable-number-of-arguments-to-a-javascript-function
*/


var fn = (...args) => {
	for (let a of args) {
		console.log(a)
	}
}

fn(10, 30, 20);
