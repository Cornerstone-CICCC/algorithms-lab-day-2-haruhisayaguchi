// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".
function convertToCamelCase(text) {
	const words = text.split('_');
	return words
		.map((word, i) => i !== 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word)
		.join('');
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"