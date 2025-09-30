// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".
function mostFrequentChar(text) {
	const chars = text.split('');
	let max = {
		count: 0,
		letter: ''
	};
	let curr = 0;
	for (const char of chars) {
		curr = chars.filter((item) => item === char).length
		max = curr > max.count ? { count: curr, letter: char } : max;
	}
	return max.letter;
}


console.log(mostFrequentChar("javascript")); // Expected output: "a"