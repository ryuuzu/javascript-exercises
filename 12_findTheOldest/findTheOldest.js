const getAge = function (person) {
	if (person.yearOfDeath === undefined) {
		return new Date().getFullYear() - person.yearOfBirth;
	} else {
		return person.yearOfDeath - person.yearOfBirth;
	}
};

const findTheOldest = function (people) {
	let oldest = people[0];
	people.forEach((person) => {
		if (getAge(person) > getAge(oldest)) {
			oldest = person;
		}
	});
	return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
