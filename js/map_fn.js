"use strict";

let splitStrings = "Chris Lucas Fernandes Santos".split(" ").map(string => {return string});

//console.log(splitStrings);
/*
	parametros: Valor durante o loop, indice, array completo utilizado na funcao map
*/

let splitNumbers = "12, 23, 34, 123, -322".split(", ").map( (val, idx, array) => {
	//console.log(array);
	return parseInt(val);
});

console.log(splitNumbers);