//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/call


var fn = function () {
	console.log("This: %s, Typeof: %s", this, typeof this);
}

var arrowFn = () => {
	console.log("Typeof %s, arg1: %s", typeof this);
	for(let i of arguments) {
		console.log(i)
	}
}


var MyObject = function(id, date) {
	this.id = id;
	this.date = date;
}


fn.call(Math)
fn.call(new MyObject(0xff, new Date()));


arrowFn.call(Math, 12)