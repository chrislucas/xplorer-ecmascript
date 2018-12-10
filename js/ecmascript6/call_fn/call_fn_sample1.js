'use strict';

var Fn = function() {
	console.log(this);
}

var Point = function(x, y) {
	this.x = x;
	this.y = y;
	// executa a funcao Fn() e passa o valor de this no
	// contexto em que call() eh chamado, nesse caso dentro da funcao Point
	Fn.call(this);
}
// se chamarmos a funcao Point dessa forma, em strict mode 'this'
// sera undefined. Fora do strict mode this eh uma variavel global
// e dentro da funcao sera adicionado os atributos conforme o desenvolvedor implementar
// Point(12, 23)

// Caso seja a funcao Point seja chamado como construtor, 'this' sera
// definido como uma instancia de point
var p = new Point(12, 23);