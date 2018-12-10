const add1 = (a, b) => a + b


const curryng_add = a => b => a + b

console.log(add1(10, -20))
console.log(curryng_add(2)(10))

// primeira chamada toma o parametro 'a' e retorna uma funcao
let fn = curryng_add("Chris");
// a segunda toma o parametro 'b' e retonar 'a' + 'b'
console.log(fn(" Lucas"))


let curryng_concat = function(a) {
	return function(b) { return a + b; }
};
console.log(curryng_concat("Chris")(" Lucas"));

