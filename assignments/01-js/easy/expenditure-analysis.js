/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Step 1: create empty object to store totals
  let categoryTotals = {};

  // Step 2: go through each transaction
  for (let i = 0; i < transactions.length; i++) {
    let currentTransaction = transactions[i];

    let category = currentTransaction.category;
    let price = currentTransaction.price;

    // Step 3: check if category already exists
    if (categoryTotals[category] === undefined) {
      // if not, start with current price
      categoryTotals[category] = price;
    } else {
      // if yes, add price to existing value
      categoryTotals[category] = categoryTotals[category] + price;
    }
  }

  // Step 4: convert object into required array format
  let finalResult = [];

  for (let category in categoryTotals) {
    finalResult.push({
      category: category,
      totalSpent: categoryTotals[category]
    });
  }

  // Step 5: return result
  return finalResult;
}
console.log(calculateTotalSpentByCategory([
  { price: 10, category: "Food" },
  { price: 20, category: "Food" },
  { price: 15, category: "Travel" }
]));
module.exports = calculateTotalSpentByCategory;