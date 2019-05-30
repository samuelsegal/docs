const person = {
	firstname: 'Horatio',
	lastname: 'Alderaan',
};
function firstname(p) {
	return p.firstname;
}

function lastname(p) {
	return p.lastname;
}
function compliment(first) {
	return last => `Why hello, ${first} ${last}. You look most fetching today.`;
}
const complimentPerson = person => compliment(firstname(person))(lastname(person));
console.log(complimentPerson(person));
