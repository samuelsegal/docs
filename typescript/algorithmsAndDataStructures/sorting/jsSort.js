/**
 * Built in javascript sort method takes a comparator as a parameter
 * By default it sorts on character code.
 */

function numbCompare(num1, num2) {
	return num1 - num2;
}
console.log(`Without defining comparator [6, 4, 15, 10].sort() =  ${[6, 4, 15, 10].sort()}`);
console.log(`With defining comparator [6, 4, 15, 10].sort(numbCompare) =  ${[6, 4, 15, 10].sort(numbCompare)}`);

function compareByLength(str1, str2) {
	return str1.length - str2.length;
}
console.log(`${['sadasdf', 'd', 'sdsdss', 'ddddd', 'dd', 'aaaaaaaaaaaaa'].sort(compareByLength)}`);
