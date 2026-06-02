/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  // if array is empty
  if (numbers.length === 0) {
    return null;
  }

  // Step 1: assume first element is largest
  let largest = numbers[0];

  // Step 2: loop through array
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i]; // update
    }
  }

  return largest;
}

// ✅ Input
let input = [3, 7, 2, 9, 1];

// ✅ Call function and print output
let result = findLargestElement(input);
console.log("Largest element is:", result);

module.exports = findLargestElement;