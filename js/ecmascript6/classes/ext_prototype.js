var Vehicle = function(name, year, capacity, _options) {
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

var Car = function(name, year, capacity, _options) {
	Vehicle.call(this, name, year, capacity, _options);
	this.toString = () => {
		return  this.name + ":" + this.year + "\n" + this.strOptions();
	}
};

var Motocycle = function(name, year, capacity, _options) {
	Vehicle.call(this, name, year, capacity, _options);
	this.toString = () => this.strOptions;
}


// Todas os atributos e metodos na classe veiculo serao incorporados pela
// classe Sonix
//console.log(Sonix.prototype);
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
//console.log(Sonix.prototype);

Motocycle.prototype = Object.create(Vehicle.prototype);
Motocycle.prototype.constructor = Motocycle;


let car = new Car('Onix', 2018, 5, {"ar": true, "abs": true, tetoSolar: {possui: true}});
//console.log(car.toString());
console.log(car);

var moto = new Motocycle('cb500', 2018, 2, {});
console.log(moto);


