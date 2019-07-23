/**
 * Demonstrates helper style recursion. of course a loop would be more simple.
 * However that would not demonstrate recursion
 * @param :string str
 * @param :char letter
 */
function collectIndicesFor(str, letter) {
	let strArr = str.split('');
	let result = [];
	let counter = 0;
	console.log(strArr);
	function helper(helperInput) {
		if (++counter > str.length) {
			return;
		}
		if (letter === helperInput[0]) {
			result.push(counter);
		}
		// run the strArr to nothing 1 by 1 recursively
		helper(helperInput.slice(1));
	}
	helper(strArr);
	return result;
}
console.log(collectIndicesFor('sama', 'a'));
