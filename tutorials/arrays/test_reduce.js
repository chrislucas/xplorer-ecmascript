let test = (...args) => {
	// reduce (function, initValue)
	return args.reduce( (acc, value) => acc + value, 0)
}


console.log(test(10,20,30,40))