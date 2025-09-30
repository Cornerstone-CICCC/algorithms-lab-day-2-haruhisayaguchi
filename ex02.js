// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].
function arrayDifference(firstArray, secondArray) {
	let result = [];
	for (const n of firstArray) {
		if (!secondArray.includes(n)) {
			result.push(n);
		}
	}
	return result;
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]