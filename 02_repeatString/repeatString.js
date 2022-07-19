const repeatString = function (str, repeat) {
    if (repeat < 0) {
        return 'ERROR'
    }
	let reapeatedString = "";
	for (let i = 0; i < repeat; i++) {
		reapeatedString += str;
	}
	return reapeatedString;
};

// Do not edit below this line
module.exports = repeatString;
