// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions


var p = [10,23,45,123,459];

console.log(p.map(e => { return e % 3}))


//let summation = p.reduce( (acc, val) => acc + val);
let summation = p.reduce( (acc, val, idx, arr) => acc + val);
console.log(summation);

// ao envolver o corpo da funcao com parenteses podemos faze-la retornar
// um objeto literal
let test = (x) => ({resultado: summation % x})

console.log(test(23))