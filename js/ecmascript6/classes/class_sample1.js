'use strict';

/*
	Arrows function nao tem a propriedade 'prototype'
	elas nao podem ser usadas como construtores
*/

var Car = function(model, year) {
	this.model = model;
	this.year = year;
};

Car.prototype.toString = function() {return this.model + ":" + this.year};
//var vectra = new Car("vectra", 2000);
//console.log(vectra.toString());
//console.log(vectra);

var Vehicle = function(_type, model, year) {
	this._type = _type;
	this.model = model;
	this.year = year;
	//  a arrow function utilizara o 'this' do
	// contexto em que ela esta vinculado.
	// Funcao abaixo sobreescreve o metodo toString em Vehicle.prototype.toString
	this.toString = () => this._type + ":" + this.year;
}

Vehicle.prototype = {
	// this nao esta definido dentro de arrow functions
	// dentro de uma arrow funcion lidamos com um outro escopo
	//toString: () => { return this._type + " -> " + this.model + ":" + this.year; }
	toString: function()  { return this._type + " -> " + this.model + ":" + this.year; }
}
// nesse escopo this pode ser um objeto vazio caso eu execute esse script
// no nodejs ou pode ser igual a variavel window se executado num browser,
// sem o strict mode
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
let t = () => console.log(this, Object.getOwnPropertyNames(this),  typeof this);
t();


var v = new Vehicle("caminhao", "mercede l3000", 2018);
console.log(v);
console.log(v.toString());

