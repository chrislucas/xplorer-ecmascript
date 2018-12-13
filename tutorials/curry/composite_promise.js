
//let compose = (f, g, x) => f(g(x))

let f = a => a + 1
let g = a => a * 2
let h = a => f(g(a))

let wait = time => new Promise(
	(resolve, reject) => setTimeout(resolve, time)
)

wait(300)
	.then(() => 20)
	.then(h)
	.then(value => console.log(value))
