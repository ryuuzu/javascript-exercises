const removeFromArray = function () {
	let toRemoveFrom = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		toRemoveFrom = toRemoveFrom.filter((element) => element !== arguments[i]);
	}
	return toRemoveFrom;
};

// Do not edit below this line
module.exports = removeFromArray;
