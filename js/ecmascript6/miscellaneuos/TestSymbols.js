/**
	https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol
	http://cangaceirojavascript.com.br/symbol-exemplo-uso-javascript/
	https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/
*/

let symbol = Symbol("teste")
console.log(Object.getOwnPropertyNames(symbol))


console.log(Object.getOwnPropertySymbols(symbol))
console.log(Object.getOwnPropertySymbols(Math))
console.log(Object.getOwnPropertySymbols(Array))

// Symbol.for(key) Procura por symbols com a chave "key" passada por argumento
console.log(Symbol.for("teste"))

for(let sym of Object.getOwnPropertySymbols(Array)) {
	 console.log(sym, Symbol.keyFor(sym))
}

