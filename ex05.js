// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.
const vowel = ['a', 'e', 'i', 'o', 'u']
function countConsonants(text) {
	let count = 0;
	const chars = text.replace(/ /g, '').split('');
	for (const char of chars) {
		if (!vowel.includes(char)) {
			count++;
		}
	}
	return count;
}

console.log(countConsonants("hello world")); // Expected output: 7