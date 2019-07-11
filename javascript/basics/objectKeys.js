const log = require('./../loggy');
let obj = {
	key: 'value',
	another_key: 2,
	key3: [4, 'rrr', 5],
};
obj.newKey = 'New Key';
console.log('Keys:\n', Object.keys(obj));
console.log('Entries:\n', Object.entries(obj));
console.log('Values:\n', Object.values(obj));

let stringObj = 'I am a string object, basically an arrray of chars';
for (let i = 0; i < stringObj.length; i++) {
	log.clog(log.COLOR.FgCyan, `stringObj[i]: ${stringObj[i]} ${stringObj[i].charCodeAt()}`);
}

function charCount(str) {
	var result = {};
	str = str.toLowerCase();
	for (let char of str) {
		char = char.toLowerCase();
		//using char.codeAt() and checking if results in codes that represent 0 - 9 a - z or A-Z
		if (/[a-z0-9]/.test(char)) {
			result[char] = result[char] > 0 ? result[char] + 1 : 1;
		}
	}
	return result;
}
console.log(charCount('fFfdDdggg12--+'));
