let compose = (f, g, x) => f(g(x))

let f = a => a + 1
let g = a => a * 2
let h = a => f(g(a))

var x = 15
console.log(compose(f, g, x))



console.log(h(x))