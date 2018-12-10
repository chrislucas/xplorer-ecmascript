/**

	Utilizando o conceito de curryng para implementar funcoes genericas
	e especializadas
*/

// add eh uma funcao generica, ela soma 2 numeros
let add 	= a => b => a + b
// inc eh uma funcao especializada. usando add(1), podemos criar
// uma funcao que adiciona +1 a qualquer numero
let inc 	= add(1);
// ou uma que acresce +10
let inc10 	= add(10);

/**
	A funcao add toma o parametro 'a' e retorna uma funcao
	que por sua vez toma o parametro 'b', e usa o valor 'a'
	para soma a 'b'
	Quando add eh executado, ela cria uma nova funcao com seu
	proprio escopo lexico que possui acesso a variavel 'a' externa
	a ela.
*/

console.log(inc(10))
console.log(inc10(10))