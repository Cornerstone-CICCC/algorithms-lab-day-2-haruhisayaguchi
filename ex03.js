// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.
function findMissingNumber(integers) {
	let current = 1;
	for (let i = 0; i < integers.length; i++) {
		if (current !== integers[i]) {
			return i + 1;
		}
		current++;
	}
	return false;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3