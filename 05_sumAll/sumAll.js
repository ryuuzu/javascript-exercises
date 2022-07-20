const sumAll = function (start, stop) {
	let sum = 0;
	if (
		typeof start !== "number" ||
		typeof stop !== "number" ||
		start < 0 ||
		stop < 0
	) {
		return "ERROR";
	}
	let actualStart, actualStop;
	if (start > stop) {
		actualStart = stop;
		actualStop = start;
	} else {
		actualStart = start;
		actualStop = stop;
	}
	for (i = actualStart; i <= actualStop; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
