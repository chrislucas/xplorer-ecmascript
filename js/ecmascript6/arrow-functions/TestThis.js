'use strict';
var g = this;
var f = () => this;

console.log(f() == g);

var IntervalCounter = function(c, interval, fn) {
	// quando essa funcao for usada como construtor
	// this eh uma referencia para tal instancia
	this.c = c;
	this.isUndefined = function () { return this === undefined; }
	this._start = () => {
		setInterval(() => {
			// 'this'
			fn(this)
			this.c+=1;
		}, interval);
	};
};

var isUndefined = function() {
	// this dentro de uma funcao que nao eh um construtor
	// nao tem um valor definido quando estamos no strict mode
	return this === undefined;
}

var intervalCounter = new IntervalCounter(12, 1000, (ref) => console.log(ref));
//console.log(intervalCounter.isUndefined());
//console.log(isUndefined());
//intervalCounter._start();


