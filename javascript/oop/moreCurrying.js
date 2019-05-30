const person = {
	firstname: 'Horatio',
	lastname: 'Alderaan',
	middlename: 'sdfb',
};
function firstname(p) {
	return p.firstname;
}

function lastname(p) {
	return p.lastname;
}
function compliment(first) {
	return (last, middle) => `Why hello, ${first} ${middle} ${last}. You look most fetching today.`;
}
const complimentPerson = person => compliment(person.firstname)('sdfsdfsd', 'aaaaa');
console.log(complimentPerson(person));
