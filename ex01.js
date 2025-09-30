// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".
function capitalizeWords(text) {
	let wordsArray = text.split(' ');
	wordsArray = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
	return wordsArray.join(' ');
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"