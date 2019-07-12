//This is my first attempt just to get it to work
//I am pretty sure it dopes not meet linear time and constant space requirement. Am soon to find out exactly what that means.
//const arr = [3, 4, -1, 1, 3];
const arr = [1, 2, 0];
//sort the arr
for (let i = 0; i < arr.length; i++) {
	for (let z = 0; z < i + 1; z++) {
		if (arr[z] > arr[z + 1]) {
			let tmp = arr[z];
			arr[z] = arr[z + 1];
			arr[z + 1] = tmp;
		}
	}
}
console.log(arr);

//declare an integer to hold the lowest missing positive integer
let lowestAmiss = 1;
for (let i = 0; i < arr.length; i++) {
	//is z numbre positive
	if (arr[i] >= lowestAmiss) {
		lowestAmiss = arr[i] + 1;
		if (arr[i + 1] != undefined && lowestAmiss !== arr[i + 1]) {
			break;
		}
	}
}
console.log(`lowestAmiss: ${lowestAmiss}`);

//I was correct the abovee does not pass linear time requirement due to the sorting, so...... before checking solution. 1 more try
