// funcoes de transformacao insert-insert
let tii = (oInsert1, oInsert2) => {

};
// insert-delete
let tid = (oInsert, oDelete) => {

}
// delete-insert
let tdi = (oDelete, oInsert) => {

}
// delete-delete
let tdd = (oDelete1, oDelete2) => {

}

class Operation {
	constructor(target, char = '', pos) {
		this.target = target;
		this.char = char;
		this.pos = pos;
	}
}


class Insert extends Operation {
	constructor(target, char = '', pos) {
		super(target, char, pos);
	}
	_apply() {};
};

class Delete extends Operation {
	_apply() {}
}

class FnUpdate extends Operation {
	_apply() {}
}

