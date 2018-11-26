'use strict'
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/ToString
let to_string = Object.prototype.toString

console.log(to_string.call(new Date()))
console.log(to_string.call(Date))
console.log(to_string.call(Math))
console.log(to_string.call(String))