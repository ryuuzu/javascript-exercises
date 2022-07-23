const fibonacci = function (end) {
	if (end < 1) {
		return "OOPS";
	} else if (end == 1 || end == 2) {
		return 1;
	} else {
		let a = 1;
		let b = 1;
		let c;
		for (let i = 3; i <= end; i++) {
			c = a + b;
			a = b;
			b = c;
		}
		return c;
	}
};

// Do not edit below this line
module.exports = fibonacci;
