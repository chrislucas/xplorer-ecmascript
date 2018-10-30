let [a, b] = [0xff, 0xdf]
let {x: c} = {x: a+b}
console.log(a, b, c)

let f = ([a, b] = [0x10, 0x05], {x: c} = {x: a | b}) => a | b | c

console.log(f())