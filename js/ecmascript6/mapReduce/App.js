let points = [{x: 10, y: -12}, {x:100, y: -23}, {x: 120, y:0}, {x:1, y: 12}, {x: -12, y: 12}]


var max = -((1<<30) - 1), maxIndex = -1;

let getMaxCoordX = (acc, val, idx, array) => {
	var currentMax = Math.max(acc, val);
	if (idx == 0) {
		maxIndex = idx;
		max = currentMax;
	}
	else {
		if (max < currentMax) {
			maxIndex = idx;
			max = currentMax;
		}
	}
	return maxIndex;
}

let idxPoint = points.map(x => x.x).reduce(getMaxCoordX)

console.log(points[idxPoint])

