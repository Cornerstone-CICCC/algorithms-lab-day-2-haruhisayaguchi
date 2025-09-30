// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.
function getQueryParams(url) {
	let result = {};
	const params = url.slice(url.indexOf('?') + 1);
	let entries = params.split('&');
	for (const entry of entries) {
		const keyValue = entry.split('=');
		result = { ...result, [keyValue[0]]: keyValue[1] }
	}
	return result;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }