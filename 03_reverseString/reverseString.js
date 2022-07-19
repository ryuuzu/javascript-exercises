const reverseString = function (to_reverse) {
	let reversedString = "";
	for (let i = to_reverse.length - 1; i >= 0; --i) {
		reversedString += to_reverse.at(i);
	}
	return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
