function firstNonRepeatedChar(str) {
 // Write your code here
	 // Create a frequency map to store the frequency of each character
    let frequencyMap = {};

    // Populate the frequency map
    for (let char of str) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (frequencyMap[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
