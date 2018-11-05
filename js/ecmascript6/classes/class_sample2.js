'use strict';

class Vehicle {
	constructor(name, year, capacity, _options) {
		this.name 		= name;
		this.year 		= year;
		this.capacity 	= capacity;
		this._options 	= _options;
		this.toString 	= () => this.name + ":" + this.year;
		this.strOptions = () => {
			var str = "";
			for (var i of Object.getOwnPropertyNames(this._options))
				str += i + ":" + this._options[i] + "\n";
			return str;
		}
	}
}

class Car extends Vehicle {}


let v = new Vehicle('land rover', 2018, 5, {tetoSolar: true, abs: true, airbag: true})
console.log(v);

let c = new Car();
console.log(c);
