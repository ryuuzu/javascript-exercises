const palindromes = function (str) {
	let palindrome;
	let finalString = str
		.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
		.replace(/\s{2,}/g, " ")
		.replace(/\s/g, "")
		.toLowerCase();
	let reversedString = "";
	for (i = finalString.length - 1; i >= 0; i--) {
		reversedString += finalString.charAt(i);
	}
	return reversedString === finalString;
};

// Do not edit below this line
module.exports = palindromes;
