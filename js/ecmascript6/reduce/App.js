var apply = (arr, fn, init) => {
	return arr.reduce(fn, init);
};

// os mesmos argumentos que a funcao reduce
var summation_only_even = (acc, cur, idx, arr) => {
	return (cur & 1) == 0 ? acc + cur : acc;
}

var result = apply([12,34,45,56,67,78,89,90], summation_only_even, 0);

console.log(result);

var fn = (acc, cur) => {
	return acc + cur
}

result = apply([{x: 12}, {x: 23}, {x: 34}].map(e => e.x), fn, 0);
console.log(result);




/**
	Pontos importantes
	a funcao reduce admitie 3 argumentos (reduces, valor inicial)
	e retorna um valor baseado na operacao executada pelo callback
	em cada elemento do array.

	O primeiro argumento eh uma funcao que ira aplicar uma operacao
	em cada valor do array. O segundo eh um valor inicial que sera utilizado
	junto aos argumentos da funcao passada como argumento

	A funcao callback admite 4 argumentos (acumulador, valor corrente, indice, array original)
	O acumulador e o valor corrente podem assumir 2 possiveis valores:

	1) Se o valor inicial for definido, o valor acumulador assume o valor de 'valor inicial'
		e o valor corrente tera o valor do primeiro elemento do array

	2) Do contrario a variavel acumulador eh definida com o primeiro valor do array e 
		'valor corrente' sera definido com o segundo valor do array

		Se o array estiver vazio, para nao ocorrer uma excecao defina passe um valor
		inicial no segundo argumento da funcao reduce(fn, init)

		Se o array tiver 1 elemento (nao importa a posicao) e o valor inicial nao for definido, a funcao
		passada como callback nao sera executada, e a funcao reduce retornara o unico
		elemento do array. Se o valor inicial for definido, o argumento acc assume o valor
		inicial e o valor corrente assume o valor do unico indice no array.

		Se o array estiver vazio mas o valor inicial for passada por argumento,
		a funcao callback passada por argumento nao sera executada e o retorno da funcao
		reduce sera o valor inicial
*/


// caso onde o array esta vazio poremo valor inicial foi passado
// como argumento para a funcao reduce
console.log([].reduce((acc, cur) => acc + cur, 12))

// nesse caso ocorrera uma excecao, uma vez que o array esta fazio e
// nao sera definido valores para acc nem cur
//console.log([].reduce((acc, cur) => acc + cur))


console.log([12].reduce((acc, cur) => acc + cur))
console.log([12].reduce((acc, cur) => acc + cur, -12))
console.log([].reduce((acc, cur) => acc + cur, -12))

var array = [,,12,,,,];
array.reduce((acc, cur) => {
	console.log(acc, cur);
	return acc + cur
}, -12);
console.log(array)

